import { Root, Control, Viewport, SoupleButtons } from './Souple.tsx';
export { MobileIcon, TabletIcon, DesktopIcon, ResponsiveIcon } from './icons';
export { useSouple } from './context';
export { useSelectDevice } from './hook';

const Souple = Object.assign(Root, { Control, Viewport });

export {
    Souple,
    SoupleButtons
}