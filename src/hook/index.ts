import { useState } from 'react'

export const useSelectDevice = <T extends string = string>(initValue: T | string = 'desktop') => {
  const [value, setValue] = useState<string>(initValue)
  const select = (device: string) => {
    setValue(device)
  }
  return [ value, select ] as const
}