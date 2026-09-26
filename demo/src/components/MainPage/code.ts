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

export const minWidth = `
// @name: minWidth
// @type: number
// @default: 1024

import { Souple } from "@noistommy/souple";

<Souple minWidth={number}>...</Souple>
`;


export const usage = `
import { Souple, useSelectDevice } from "@noistommy/souple";
import "@noistommy/souple/souple.css";

export default function App() {

  const [device, setDevice] = useSelectDevice('desktop')

  return (
    ...
    <Souple currentDevice={device} changeDevice={() => setDevice()}>
      <Souple.Control />
      <Souple.Viewport />
    </Souple>
    ...
  )
}
`