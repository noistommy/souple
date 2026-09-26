export const base = `
// @name: currentDevice
// @type: 'desktop' | 'tablet' | 'mobile'
// @default: 'desktop'
import { Souple } from "@noistommy/souple";

export default function Example() {
  const [device, setDevice] = useState('desktop')

  return (

    <Souple currentDevice={device} changeDevice={(d) => setDevice(d)}>
      <Souple.Control />
      <Souple.Viewport />
    </Souple>
  )
}
`;

export const soupleButtons = `
import { SoupleButtons } from "@noistommy/souple";

export default function Example() {
  const [device, setDevice] = useState('desktop')

  return (
    <>
      ...
      <SoupleButtons selected={device} handleSelect={setDevice} iconSize={16} />
      ...
    </>
  )
}
`;  

export const customHook = `
import { useSelectDevice } from "@noistommy/souple";
...

export default function Example() {
  const [device, setDevice] = useSelectDevice('desktop')

  return (
    <>
      ...
      <SoupleButtons selected={device} handleSelect={setDevice} iconSize={16} />
      ...
    </>
  )
}
`;

export const control = `
<Souple currentDevice={device}>
  ...
  <Souple.Control 
    showSelector={true} 
    showTypeSelector={true} 
    showLabel={true} 
    showLandscape={true} />
</Souple>
`;

export const showSelector = `
<Souple currentDevice={device}>
  ...
  <Souple.Control showSelector={true || false}  />
  ...
</Souple>
`;

export const showTypeSelector = `
<Souple currentDevice={device}>
  ...
  <Souple.Control showTypeSelector={true || false}  />
  ...
</Souple>
`;

export const showLabel = `
<Souple currentDevice={device}>
  ...
  <Souple.Control showSize={true || false}  />
  ...
</Souple>
`;

export const showLandscape = `
<Souple currentDevice={device}>
  ...
  <Souple.Control showLandscape={true || false}  />
  ...
</Souple>
`;

export const devices = `
// @name: devices

import { Souple } from "@noistommy/souple";

const userDeviceList = {
  // User can override existing keys or add new ones
  // Keys are case-sensitive and must match the currentDevice prop
}

<Souple devices={userDeviceList}>...</Souple>

type DeviceInfo = {
  width: number
  height: number
}

type DeviceList = Record<string, DeviceInfo>

// Default Device List
const ALL_DEVICE_LIST = {
  // Desktop
  desktopLarge: { width: 2560, height: 1440 },
  desktop: { width: 1920, height: 1080 },
  desktopSmall: { width: 1440, height: 900 },
  laptop: { width: 1366, height: 768 },

  // Tablet
  ipadPro: { width: 1024, height: 1366 },
  ipadAir: { width: 820, height: 1180 },
  tablet: { width: 1024, height: 768 },

  // Mobile - Large
  iphone15ProMax: { width: 430, height: 932 },
  iphone14Plus: { width: 428, height: 926 },
  galaxyS23Ultra: { width: 412, height: 915 },

  // Mobile - Medium
  iphone15: { width: 393, height: 852 },
  iphone13: { width: 390, height: 844 },
  pixel7: { width: 412, height: 892 },

  // Mobile - Small
  mobile: { width: 375, height: 667 },
  iphoneSE: { width: 375, height: 667 },
  galaxyS8: { width: 360, height: 740 },

  // Foldable
  galaxyZFold: { width: 344, height: 882 },
  galaxyZFoldUltra: { width: 674, height: 691 },
  iphoneDuo: { width: 626, height: 890 },
} as const;
`;

export const initLandscape = `
// @name: landscape
// @type: boolean
// @default: false

import { Souple } from "@noistommy/souple";

<Souple landscape={true || false}>...</Souple>
`;

export const dsize = `
// @name: dWidth / dHeight
// @type: number
// @default: null

import { Souple } from "@noistommy/souple";

<Souple dWidth={number} dHeight={number}>...</Souple>
`;

export const external = `
// @name: external
// @type: 'show' | 'hide' | null
// @default: null

<Parent nt-tooltip="... external: show;">Show</Parent>
<Parent nt-tooltip="... external: hide;">Hide</Parent>
`;

export const position = `
// @name: pos
// @type: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | 'left-start' | 'left-center' | 'left-end' | 'right-start' | 'right-center' | 'right-end'
// @default: 'top-center'

<Parent nt-tooltip="pos: top;">Top</Parent>
<Parent nt-tooltip="pos: bottom;">Bottom</Parent>
<Parent nt-tooltip="pos: left;">Left</Parent>
<Parent nt-tooltip="pos: right;">Right</Parent>
`;

export const aligns = `
// @name: pos
// @type: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | 'left-start' | 'left-center' | 'left-end' | 'right-start' | 'right-center' | 'right-end'
// @default: 'top-center'

<Parent nt-tooltip="pos: top-start;">Top Start</Parent>
<Parent nt-tooltip="pos: top-center;">Top Center</Parent>
<Parent nt-tooltip="pos: top-end;">Top End</Parent>
<Parent nt-tooltip="pos: bottom-start;">Bottom Start</Parent>
<Parent nt-tooltip="pos: bottom-center;">Bottom Center</Parent>
<Parent nt-tooltip="pos: bottom-end;">Bottom End</Parent>
<Parent nt-tooltip="pos: left-start;">Left Start</Parent>
<Parent nt-tooltip="pos: left-center;">Left Center</Parent>
<Parent nt-tooltip="pos: left-end;">Left End</Parent>
<Parent nt-tooltip="pos: right-start;">Right Start</Parent>
<Parent nt-tooltip="pos: right-center;">Right Center</Parent>
<Parent nt-tooltip="pos: right-end;">Right End</Parent>
`;

export const offset = `
// @name: offset
// @type: number
// @default: 10

<Parent nt-tooltip="content: Offset; offset: {number};">
  Offset ({number}px)
</Parent>
`;

export const size = `
// @name: size
// @type: 'small' | null
// @default: 'normal'

<Parent nt-tooltip="content: Small; size: small;">Small</Parent>
<Parent nt-tooltip="content: Normal;">Normal</Parent>
`;

export const maxWidth = `
// @name: maxWidth
// @type: number
// @default: 250

<Parent nt-tooltip="maxWidth: 150;">150px</Parent>
<Parent nt-tooltip="maxWidth: 250;">250px</Parent>
<Parent nt-tooltip="maxWidth: 500;">500px</Parent>
`;

export const textAlign = `
// @name: textAlign
// @type: 'left' | 'center' | 'right'
// @default: 'left'

<Parent nt-tooltip="textAlign: left;">Left Text</Parent>
<Parent nt-tooltip="textAlign: center;">Center Text</Parent>
<Parent nt-tooltip="textAlign: right;">Right Text</Parent>
`;

export const padding = `
// @name: padding
// @type: number
// @default: 8

<Parent nt-tooltip="padding: 4;">4px Padding</Parent>
<Parent nt-tooltip="padding: 16;">16px Padding</Parent>
<Parent nt-tooltip="padding: 24;">24px Padding</Parent>
`;

export const zIndex = `
// @name: zIndex
// @type: number
// @default: 99999999

<Parent nt-tooltip="zIndex: 1;">1</Parent>
<Parent nt-tooltip="zIndex: 1000;">1000</Parent>
<Parent nt-tooltip="zIndex: 99999999;">99999999</Parent>
`;

export const usage = `
// app.tsx
import { initTooltip, clearTooltip } from "@noistommy/nt-tooltip";
import "@noistommy/nt-tooltip/nt-tooltip.css";


function App() {
  useEffect(() => {
    initTooltip();
    return () => {
      clearTooltip();
    }
  }, []);
  ...
}

`