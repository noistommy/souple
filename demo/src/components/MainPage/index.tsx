
import {useState} from 'react';
import CodeBlock from '../CodeBlock';
import * as Codes from './code';

import { MobileIcon, TabletIcon, DesktopIcon, SoupleButtons, Souple, useSelectDevice } from '../../../../src';

import SoupleControlPreview from '../../assets/img/souple-control-preview.png'

// const codeList = {
//   base: '<div nt-tooltip="content: Tooltip Content;">...</div>',
//   invert: ``
// }

export default function MainPage() {
  const [selectedDevice, setSelectedDevice] = useSelectDevice('desktop');
  const [showTypeSelector, setShowTypeSelector] = useState(true);
  const [showSelector, setShowSelector] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const [showLandscape, setShowLandscape] = useState(true);

  const selectDevice = (value: string) => {
    setSelectedDevice(value);
  }

  return (
    <div className="pb-10" style={{maxWidth: '780px', width: '100%', margin: '0 auto'}}>
      <Souple currentDevice={selectedDevice} changeDevice={selectDevice}>
        <Souple.Control showTypeSelector={showTypeSelector} showSelector={showSelector} showSize={showSize} showLandscape={showLandscape} />
        <Souple.Viewport />
      </Souple>
      {/* <GetStart /> */}
      
      {/* <hr className="be hr mt-10" /> */}
      
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Souple 이란?</div>
          <p><span className="bold">Souple (souple / 수플)</span> : 프랑스어로 '유연한, 신축성 있는'이라는 뜻으로, 반응형(Flexible)의 의미를 그대로 담고 있습니다.</p>
        </div>
      </div>

      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Base</div>
          <p>디바이스 타입은 크게 'Desktop', 'Tablet', 'Mobile' 세가지로 나뉩니다. 기본값인 Desktop 외 다바이스 값에 따라 반응형 화면을 보여줍니다. 구조상 'mobile', 'tablet'은 반응형 모드 'On' 상태이고 'desktop'은 'Off' 상태입니다.  </p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents be flex center gap-4">
                <div className="be-buttons border">
                  <div className="be-button icon compact" nt-tooltip={`content: Souple On;`} onClick={() => selectDevice('mobile')}>
                      <MobileIcon width="16" height="16" /> Mobile
                  </div>
                  <div className="be-button icon compact" nt-tooltip={`content: Souple On;`} onClick={() => selectDevice('tablet')}>
                      <TabletIcon width="16" height="16" /> Tablet
                  </div>
                  <div className="be-button icon compact" nt-tooltip={`content: Souple Off;`} onClick={() => selectDevice('desktop')}>
                      <DesktopIcon width="16" height="16" />   Desktop
                  </div>
                </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='tsx'
              code={Codes.base}
            />
          </div>
        </div>

      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Souple Buttons</div>
          <p>`currentDevice` 값 지정을 위한 버튼 그룹 UI 컴포넌트를 제공합니다. props로 selected와 handleSelect를 전달 받아 사용할 수 있습니다.</p>
        </div>
        <div className=''>
          <div className="be-segment surface align-center">
              <div className="contents be flex center gap-4">
                <SoupleButtons selected={selectedDevice} handleSelect={selectDevice} iconSize={16} />
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='tsx'
              code={Codes.soupleButtons}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">useSelectDevice</div>
          <p>useSelectDevice는 Souple 컴포넌트에서 `currentDevice` 값을 사용하기 위한 훅입니다. 컴포넌트에서는 해당 훅을 사용하여 현재 디바이스를 확인하고 반응형으로 렌더링합니다.</p>
        </div>
        <div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='tsx'
              code={Codes.customHook}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Control</div>
          <p>Souple 활성화 시 화면 중앙 상단에 Control 영역이 추가 됩니다. 이 영역에서 디바이스 타입 변경, 상세 디바이스 선택 메뉴, 적용 사이즈, 화면 가로/세로 변경 등의 기능을 포함하고 있습니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
            <img src={SoupleControlPreview} style={{width: '100%'}} alt="souple control preview" />
            <div className="contents be flex column" >
              <p>DeviceSelector: 정의된 디바이스 목록 중 선택하여 뷰포트 크기 적용</p>
              <p>DeviceTypeSelector: 기본 디바이스 타입(mobile, tablet, desktop) 선택하여 뷰포트 크기 적용</p>
              <p>SizeLabel: 현재 뷰포트 크기 표시</p>
              <p>Lanscape: 뷰포트 가로/세로 변경</p>
            </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='tsx'
              code={Codes.control}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Show Selector</div>
          <p>showSelect는 Control 영역에 디바이스 목록(DeviceSelector component) 표시 유무를 선택합니다. deviceList props로 전달된 디바이스 목록을 표시합니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents be flex gap-2 between">
                  <label className="be-checkbox">
                    <input type="checkbox" checked={showSelector} onChange={() => setShowSelector(prev => !prev)} />
                    {showSelector ? 'Show' : 'Hide'} DeviceSelector
                  </label>
                  <button className="be-button icon" onClick={() => setSelectedDevice('mobile')}>DeviceSelector Check</button>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='tsx'
              code={Codes.showSelector}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Show Type Selector</div>
          <p>showTypeSelector는 Control 영역에 디바이스 타입(DeviceTypeSelector component) 표시 유무를 선택합니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
            <div className="contents be flex gap-2 between">
                <label className="be-checkbox">
                  <input type="checkbox" checked={showTypeSelector} onChange={() => setShowTypeSelector(prev => !prev)} />
                  {showTypeSelector ? 'Show' : 'Hide'} DeviceTypeSelector
                </label>
                <button className="be-button icon" onClick={() => setSelectedDevice('mobile')}>DeviceTypeSelector Check</button>
            </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='tsx'
              code={Codes.showTypeSelector}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Show Label</div>
          <p>showLabels는 Control 영역에 디바이스 사이즈 레이블(SizeLabel component) 표시 유무를 선택합니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
            <div className="contents be flex gap-2 between">
                <label className="be-checkbox">
                  <input type="checkbox" checked={showSize} onChange={() => setShowSize(prev => !prev)} />
                  {showSize ? 'Show' : 'Hide'} SizeLabel
                </label>
                <button className="be-button icon" onClick={() => setSelectedDevice('mobile')}>SizeLabel Check</button>
            </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='tsx'
              code={Codes.showLabel}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Show landscape</div>
          <p>showLandscape는 Control 영역에 가로/세로 모드 변경 버튼을 표시 유무를 선택합니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
            <div className="contents be flex gap-2 between">
                <label className="be-checkbox">
                  <input type="checkbox" checked={showLandscape} onChange={() => setShowLandscape(prev => !prev)} />
                  {showLandscape ? 'Show' : 'Hide'} landscape Button
                </label>
                <button className="be-button icon" onClick={() => setSelectedDevice('mobile')}>Landscape Check</button>
            </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='tsx'
              code={Codes.showLandscape}
            />
          </div>
        </div>``
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Devices</div>
          <p>devices 속성은 Control 영역에 표시할 디바이스 목록을 설정합니다. 기본적으로 정의된 디바이스 목록(ALL_DEVICE_LIST)과 사용자가 정의한 디바이스 목록을 합쳐서 표시합니다. </p>
        </div>
        <div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='tsx'
              code={Codes.devices}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Init Landscape</div>
          <p>landscape는 뷰포트 가로/세로 모드 초기값을 설정합니다. 기본값은 false로 Portrait(세로) 상태입니다. Landscape(가로) 상태로 변경되면 뷰포트의 크기는 디바이스의 가로/세로 값을 변경하여 적용합니다. </p>
        </div>
        <div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='tsx'
              code={Codes.initLandscape}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">DWidth / DHeight</div>
          <p>dWidth와 dHeight는 뷰포트의 너비와 높이를 강제로 설정합니다. </p>
        </div>
        <div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='tsx'
              code={Codes.dsize}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Key Control</div>
          <p>Souple은 사용자 접근성 향상을 위해 키보드 제어 기능을 제공합니다. </p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents be flex column start">
                <p>
                  <span className="be-tag kbd shift meta">shift</span> 
                  <span className="be-tag kbd ">1</span> 
                  <span className="f-italic"> 키를 누르면 Mobile 디바이스로 변경됩니다.</span>
                </p>
                <p>
                  <span className="be-tag kbd shift meta">shift</span> 
                  <span className="be-tag kbd ">2</span> 
                  <span className="f-italic"> 키를 누르면 Tablet 디바이스로 변경됩니다.</span>
                </p>
                <p>
                  <span className="be-tag kbd shift meta">shift</span> 
                  <span className="be-tag kbd ">3</span> 
                  <span className="f-italic"> 키를 누르면 Desktop 디바이스로 변경됩니다.</span>
                </p>
                <p>
                  <span className="be-tag kbd space">space</span> 
                  <span className="f-italic"> 키를 누르면 가로/세로 모드가 변경됩니다.</span>
                </p>
                <p>
                  <span className="be-tag kbd esc">esc</span> 
                  <span className="f-italic"> 키를 누르면 반응형 모드가 비활성화(Desktop 디바이스로 변경)됩니다.</span>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// function GetStart() {
//   return (
//     <>
//       <div className="detail mt-10">
//         <div className="header">
//           <div className="bold large">Installation</div>
//           <p></p>
//         </div>
//         <div>
//           <div className='be-segment border p-0'>
//             <CodeBlock
//               language='bash'
//               code={`npm install @noistommy/nt-tooltip`}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="detail mt-10">
//         <div className="header">
//           <div className="bold large">Usage</div>
//           <p>전역에서 실행 하여 프로젝트 전체 영역에서 툴팁을 사용 할 수 있습니다.</p>
//           <p>컴포넌트 적용 시 반드시 nt-tooltip 속성이 children에 상속되도록 랜더링 해야 합니다.(html은 바로 적용 가능함)</p>
//         </div>
//         <div>
//           <div className='be-segment border p-0'>
//             <CodeBlock
//               language='tsx'
//               code={Codes.usage}
//             />
//           </div>
//           <div className='be-segment border p-0'>
//             <CodeBlock
//               language='tsx'
//               code={`// in component.tsx \n<Parent nt-tooltip="{... tooltip options}"> content</Parent>`}
//             />
//           </div>
//         </div>

//       </div>
//     </>
//   )
// }
