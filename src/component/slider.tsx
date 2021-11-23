import React ,{ Fragment, useState } from "react";
import '../design.css';
import img1 from './img/port1.png';
import img2 from './img/port2.png';
import img3 from './img/port3.png';


const images = [
  <img src={img1} id="pictures"/>,
  <img src={img2} id="pictures"/>,
  <img src={img3} id="pictures"/>,
];



const Slider = () => {
  const go_next = () => {
    switch (imgs) {
      case 0:
        setimgs(1);
        break;
        case 1:
          setimgs(2);
          break;
          case 2:
            setimgs(0);
        break;
      default:
        break;
    }
  }
  const go_back = () => {
    switch (imgs) {
      case 0:
        setimgs(2);
        break;
        case 1:
          setimgs(0);
          break;
          case 2:
            setimgs(1);
        break;
      default:
        break;
    }
  }

  const [imgs , setimgs] = useState(0);
    return (
      <Fragment>
      <div className="Project_imgs">
          <div id="picture_container">
                <div className="project_pictures">
                <link href='https://fonts.googleapis.com/css?family=Ropa+Sans' rel='stylesheet'/>
                  <button className="previous" onClick={go_back}>&lsaquo;</button>
                     {images[imgs]}
                  <button className="next" onClick={go_next}>&rsaquo;</button>
                  <span id="stateFont">&lsaquo; {imgs + 1} / 3 &rsaquo;</span>
                </div>
          </div>
        <span className="project_Text" id="Heads">포트폴리오 웹사이트 ( 2021 . 11 )</span><br/><br/>
        <span className="project_Text" id="subscribes">포트폴리오를 목적으로 제작한 웹사이트이며 공부한 내용을 복습하기위해 제작되었습니다. <br/>
        기술 트랜드에 맞춰 React를 위주로 개발하였으며 상태관리 라이브러리를 사용하여 상호작용이 용이한 코드를 만들었습니다. </span>
      </div>
      <div id="sideway">
        <span id="sub_icon">✅ GitHub</span>
        <span id="sub_text">
        <a href="https://github.com/5tr1ker/Reactive_PortFolio" target='_blank' className="Profile1">
                    <svg className="Profile_ICon_portfolio" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3">
                        </path>
                    </svg>
                    </a>
              </span><br/>
        <span id="sub_text_2">https://github.com/5tr1ker/Reactive_PortFolio</span><br/>
        <span id="sub_icon">✅ 도메인</span><br/>
        <span id="sub_text_3">https://portfolio1-nine-sigma.vercel.app/</span><br/>
        <span id="sub_icon">✅ 기술 스택</span><br/>
        <span id="sub_text">React TypeScript Redux</span><br/>
      </div>
      </Fragment>
    );
  }

export default Slider