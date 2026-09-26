import { createContext, useContext } from 'react'
import type { DeviceList, Size } from './types';

type SoupleContextValue = {
  device: string
  setDevice: (device: string) => void
  isLandscape: boolean
  setIsLandscape: React.Dispatch<React.SetStateAction<boolean>>
  deviceList: DeviceList
  size: Size
  isTopWindow: boolean
  isDsize: boolean
}

export const SoupleContext = createContext<SoupleContextValue | null>(null)

export const useSouple = () => {
  const ctx = useContext(SoupleContext)
  if (!ctx) {
    throw new Error('ERROR! Souple`s child components can use to only <Souple>' )
  }
  return ctx
}

