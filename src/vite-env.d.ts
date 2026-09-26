/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.png'
declare module '*.svg?react' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}
declare module '@noistommy/nt-tooltip';