export const ALL_DEVICE_LIST = {
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

export type DeviceInfo = {
  width: number
  height: number
}

export type DeviceList = Record<string, DeviceInfo>

export type RootProps = {
  children: React.ReactNode
  devices?: DeviceList
  currentDevice?: string
  changeDevice?: (device: string) => void
  landscape?: boolean
  dWidth?: number | null
  dHeight?: number | null
}
export type Size = { width: number; height: number }