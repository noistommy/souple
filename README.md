# Souple

![Static Badge](https://img.shields.io/badge/javascript-%23F7DF1E)
![Static Badge](https://img.shields.io/badge/html-%23E34F26?logo=html)
![Static Badge](https://img.shields.io/badge/sass-%23CC6699)
![Static Badge](https://img.shields.io/badge/vite-bundler-%23646CFF)

**Souple** (souple / 수플) : 프랑스어로 '유연한, 신축성 있는'이라는 뜻으로, 반응형(Flexible)의 의미를 그대로 담고 있습니다.

**`Souple`**은 페이지 내부에서 화면 크기에 따라 반응형 웹 페이지를 테스트 할 수 있는 웹 뷰어 모듈입니다. 기본 19개의 디바이스를 크기를 제공하며, 디바이스 및 뷰포트 설정을 통해 반응형 웹 페이지를 테스트 할 수 있습니다. Device 크기 이외에도 뷰포트 가로/세로 모드 변경을 통해 다양한 반응형 웹을 테스트 할 수 있습니다.

**`Souple`** is a web viewer module that allows you to test responsive web pages across different screen sizes directly within the page. It provides 19 default device sizes, enabling responsive web testing through customizable device and viewport settings. Beyond preset device sizes, you can test a wide range of responsive webs by toggling between landscape and portrait viewport modes.

---

## Demo

![docs_preview](https://github.com/user-attachments/assets/2967be7e-61cf-4066-894d-945b83ff9c49)

[@noistommy/nt-tooltip](https://noistommy.github.io/nt-tooltip) demo page.

---

<!--
## Installation

---
-->

## Usage

### Registration

```tsx
import { Souple } from "@noistommy/souple";
import "@noistommy/souple/souple.css";
```

### Use Souple in Component TSX

```tsx

export default Exanple() {
  const [device, setDevice] = useState<string>('desktop')

  const handleChangeDevice = (d) => setDevice(d)
  return (
    <Souple currentDevice={device} changeDevice={handleChangeDevice}>
      <Souple.Control
        showSelector={true}
        showTypeSelector={true}
        showLabel={true}
        showLandscape={true}
      />
      <Souple.Viewport />
    </Souple>
  )
}
```

---

## Props

#### Souple Props

- **currentDevice**: _string_ ▶︎ `desktop`
  Set init device
- **changeDevice**: _function_ ▶︎ `() => {}`
  Callback function when device is changed

#### Souple.Control Props

- **showSelector**: _boolean_ ▶︎ `true`
  Show device selector
- **showTypeSelector**: _boolean_ ▶︎ `true`
  Show device type selector
- **showLabel**: _boolean_ ▶︎ `true`
  Show device label
- **showLandscape**: _boolean_ ▶︎ `true`
  Show landscape mode
