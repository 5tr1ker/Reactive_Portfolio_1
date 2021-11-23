import React , {Fragment, useState } from "react";
import { useSelector } from "react-redux";
import '../design.css';
import { RootState } from "./modules/indexs";
import Slider from './slider';
import imgs from './img/frontendskill.png';
import imgs1 from './img/backendskill.png';
import imgs2 from './img/versioncontrol.png';
import imgs3 from './img/icons.png';

const frontend_skill = 
<div id="Skills" className="Skill_effect fts">
            <img src={imgs} alt="Reacts" id="Front_ends"></img>
        <div>
    </div>
</div>

const backend_skill =
<div>
    <div id="Skills" className="Skill_effect">
        <img src={imgs1} id="Front_ends" alt="Javas" />
    </div>
</div>

const version_controls =
<div>
    <div id="Skills" className="Skill_effect">
        <img src={imgs2} alt="Front_ends" id="Front_ends" />
    </div>
</div>

const Sections =() => {
    const clsname = useSelector((state: RootState) => state.changer.clsname); // redux 값을 가져옵니다.
    const [content , change_content] = useState(frontend_skill);
   
      
    if(clsname === 'Home_Scenes') {
        const Main_Scene = <section className={'Section_Base'}> {/* Home 화면 */}
         <aside className='Section_Aside Box_Skill'> {/* Skill 박스 전체 */}
                <div className='Aside_Box'> {/* 박스 내의 컨텐츠 틀 */}
                    <span className="Aside_Font" id='finale'>Skills</span><br/><br/>
                    <a href="#">
                    <span className="Aside_Font underscore" id='finale' onClick={() => {change_content(frontend_skill)}}>Front-End</span>
                    </a>
                    <a href="#">
                    <span className="Aside_Font underscore" id='finale' onClick={() => {change_content(backend_skill)}}>Back-End</span>
                    </a>
                    <a href="#">
                    <span className="Aside_Font underscore" id='finale' onClick={() => {change_content(version_controls)}}>Version Control</span>
                    </a>
                    <div id='Aside_Box_Main'> {/* 내 스킬창 보여줍니다. */}
                        {content}
                    </div>
                </div>
                <div id='Aside_Box_Profile'>{/* 스킬창 옆에 프로필구현 */}
                    <img src={imgs3} id="profile_img" alt="Profile_Image"/>
                    <div className='Spinner' id='Profile_Base'>
                        <div id='Spinner_Core'></div>
                    </div>
                    <span id='my_Name'>박  상  진</span><br/>
                    <a href="https://github.com/5tr1ker" target='_blank' className="ICon_Hovers">
                    <svg className="Profile_ICon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3">
                        </path>
                    </svg>
                    </a>
                    <a href="https://www.instagram.com/sangjin1101_/" target="_blank" className="ICon_Hovers">
                    <svg className="Profile_ICon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                       <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z">
                        </path>
                        </svg>
                    </a>
                </div>
            </aside>
        <aside className="Box_Skill">
            <div id="Aside_Box_MySelf">
                <div id="Aside_Box_MySelf_Tool"> {/* 박스안에 틀을 잡아줍니다. */}
                    안녕하세요. 코딩을 취미로 하는 초보 개발자 박상진 입니다.<br/>
                    더 나은 서비스를 만들기 위해 공식 문서를 자주 참고하고, 더욱 최적화된 코드를 작성하기 위해 많은 고민을 하고있습니다. <br/>
                    부족한 점은 많지만 트렌드에 맞춰 지속적으로 성장하는 개발자가 되는것이 제 목표입니다.
                </div>
            </div>
        </aside>
        </section>
        return Main_Scene;
    }

    if (clsname === 'contact_Scene') {     {/* Contact 태그 */}
        const Contact_Scene = 
        <section className="contact_box"> 
        <aside>
            <div id="contact_where">
            LIVE IN <br/>경기도 김포시
            </div>
            <span id="mail_text">e-mail : follow2272@naver.com</span>
            <div className="wrap">
  		    <a href="mailto:follow2272@naver.com" className="button2">
              <svg className="svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                    </path>
                    </svg>
                  Send Mail</a>
	        </div>
        </aside>
    </section>
    return Contact_Scene;
    }
    if (clsname === 'Project_Scenes') {    {/* project 태그 */}
        const Project_Scenes = 
        <section className="Project_area">
            <aside className="area_contact">  
                <Slider/>
            </aside> 
        </section>
        return Project_Scenes;
    }
    return(
        <Fragment/>
    )
    
}

export default Sections;