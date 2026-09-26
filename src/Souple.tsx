import './souple.scss';

import { useRef, useState, useMemo, useEffect, useContext } from 'react';
import { UNSAFE_LocationContext } from 'react-router';

import { useSouple, SoupleContext } from './context';
import { MobileIcon, TabletIcon, DesktopIcon, LandscapeIcon, ResponsiveIcon, ArrowDownIcon, ArrowUpIcon } from './icons'
import { ALL_DEVICE_LIST, type RootProps, type Size, type DeviceList } from './types';


const Root = ({
  children,
  devices = {},
  currentDevice = 'desktop',
  changeDevice = () => {},
  landscape = false,
  dWidth = null,
  dHeight = null
}: RootProps) => {
  const [isTopWindow] = useState(() => window.self === window.top)
  // const [isDsize, setIsDsize] = useState(() => dWidth !== null && dHeight !== null)
  const [device, setDevice] = useState(currentDevice)
  const [prevCurrentDevice, setPrevCurrentDevice] = useState(currentDevice)
  const [isLandscape, setIsLandscape] = useState(landscape)
  const [deviceList] = useState<DeviceList>({...ALL_DEVICE_LIST, ...devices})

  if (prevCurrentDevice !== currentDevice) {
    setPrevCurrentDevice(currentDevice)
    setDevice(currentDevice)
  }

  useEffect(() => {
    if (!isTopWindow) return

    const keyControl = (event: KeyboardEvent) => {
      if (event.repeat) return
      const target = event.target as HTMLElement
      if (['INPUT', 'TEXTAREA'].includes(target.tagName) || target.isContentEditable) return

      if (event.key === 'Escape') setDevice('desktop')
      else if (event.key === '!') setDevice('mobile')
      else if (event.key === '@') setDevice('tablet')
      else if (event.key === '#') setDevice('desktop')
      else if (event.key === ' ') {
        event.preventDefault()
        setIsLandscape(prev => !prev)
      }
    }

    window.addEventListener('keydown', keyControl)
    return () => window.removeEventListener('keydown', keyControl)
  }, [isTopWindow])

  useEffect(() => {
    changeDevice(device)
  }, [device, changeDevice])
  
  // useEffect(() => {
  //   if (dWidth !== null && dHeight !== null) {
  //     setIsDsize(true)
  //   }
  // }, [dWidth, dHeight])

  const isDsize = useMemo(() => dWidth !== null && dHeight !== null, [dWidth, dHeight])

  const size = useMemo<Size>(() => {
    const base = deviceList[device] ?? deviceList.desktop
    const width = dWidth && dHeight ? dWidth : base.width
    const height = dWidth && dHeight ? dHeight : base.height
    return isLandscape ? { width: height, height: width } : { width, height }
  }, [isLandscape, device, deviceList, dWidth, dHeight])

  const value = useMemo(() =>({
    device, setDevice, isLandscape, setIsLandscape, deviceList, size, isTopWindow, isDsize
  }),[device, isLandscape, deviceList, size, isTopWindow, isDsize])

  return (
    <SoupleContext.Provider value={value}>
      {children}
    </SoupleContext.Provider>
  )
}

const Control = ({
  className = null,
  showSize = true,
  showSelector = true,
  showTypeSelector = true,
  showLandscape = true
}: {
  className?: string | null
  showSize?: boolean
  showSelector?: boolean
  showTypeSelector?: boolean
  showLandscape?: boolean
}) => {
  const { device, isTopWindow, isDsize } = useSouple()

  if (!isTopWindow || device === 'desktop') return null
  return (
    <div className={['souple-control', className, device, isDsize ? 'dsize' : null].join(' ')}>
      {showSelector && <DeviceSelector />}
      {showTypeSelector && <DeviceTypeSelector />}
      {showSize && (<SizeLabel />)}
      {showLandscape && (<Lanscape />)}
    </div>
  )
}

const DeviceTypeSelector = () => {
  const { device, setDevice } = useSouple()
  return (
    <SoupleButtons
      selected={device}
      handleSelect={setDevice}
    />
  )
}

const SoupleButtons = ({
  iconSize = 14,
  selected,
  handleSelect
}: {
  iconSize?: number
  selected: string
  handleSelect: (key: string) => void
}) => {
  const deviceType = [
    { key: 'mobile', Icon: MobileIcon },
    { key: 'tablet', Icon: TabletIcon },
    { key: 'desktop', Icon: DesktopIcon },
  ]
  return (
    <div className="souple-buttons">
      {deviceType.map(({key, Icon}) => (
        <button key={key} className={`souple-button ${selected === key ? 'selected' : ''}`}
        onClick={() => handleSelect(key)}>
          <Icon width={iconSize} height={iconSize} />
        </button>
      ))}
    </div>
  )
}

const DeviceSelector = () => {
  const { device, setDevice, deviceList } = useSouple()
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  const isCustom = device !== 'desktop' && device !== 'tablet' && device !== 'mobile'

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (ref.current?.contains(event.target as Node)) return
      setShow(false)
    }
    window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  }, [])
  if (device === 'desktop') return null
  return (
    <>
      <div  ref={ref} className="souple-buttons custom" onClick={() => setShow(prev => !prev)}>
        <button className={`souple-button ${isCustom ? 'selected' : ''}`}>
          <ResponsiveIcon width="14" height="14" />
        </button>
        <button className={`souple-button ${isCustom ? 'selected' : ''}`} onClick={() => setDevice(device)}>
          <span className="current-name">{isCustom ? device : 'Responsive'}</span>
          {show ? <ArrowUpIcon width="14" height="14" /> : <ArrowDownIcon width="14" height="14" />}
        </button>
      </div>
      {show && (
        <div className="souple-menu">
          <ul>
            {Object.keys(deviceList).map(item => (
              <li key="item" className={item === device ? 'selected' : ''}
                onClick={() => setDevice(item)}
              >{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}


const SizeLabel = () => {
  const { device, size } = useSouple()
  if (device === 'desktop') return null
  return <button className="souple-button border">{size.width} x {size.height}</button>
}

const Lanscape = () => {
  const { device, isLandscape, setIsLandscape } = useSouple()
  if (device === 'desktop') return null

  return (
    <button className={`souple-button border ${isLandscape ? 'selected' : ''}`}
    onClick={() => setIsLandscape(prev => !prev)}>
      <LandscapeIcon width="14" height="14" />
    </button>
  )
}

const Viewport = () => {
  const { isTopWindow, device, size } = useSouple()
  // UNSAFE_LocationContext가 없으면(라우터 없음) undefined → window.location으로 폴백
  const locationCtx = useContext(UNSAFE_LocationContext)
  const pathname = locationCtx?.location.pathname ?? window.location.pathname

  if (!isTopWindow) return null

  const src = window.location.origin + pathname
  return (
    <div id="SoupleView" className={['souple-view', device].join(' ')}>
      {device !== 'desktop' && (
        <iframe
          src={src}
          width={size.width}
          height={size.height}
        />
      )}
    </div>
  )
}

export { Root, Control, Viewport, SoupleButtons }
