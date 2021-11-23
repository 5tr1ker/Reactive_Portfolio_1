import '../design.css';
import SideBar from './Sidebar';
import Heads from './Heads';
import Sections from './Sections';
import React ,{ Fragment, useState } from 'react';

function Base() {
    const [mains_ , Mains_change] = useState(true);
    const [Scene , change_Scene] = useState('X');

    const StartEvents = () => { /* 다음 화면으로 이동합니다. */
            change_Scene('First_Scene');
            if(mains_){
            setTimeout(() => {  /* 첫번째 화면 이펙트 */
                Mains_change(v => !v);
                change_Scene('None');   /* 다음 화면에 영향이 가지 않게 합니다. */
            },600);
            }
            else {
                change_Scene('Second_Scene')
                setTimeout(() => {  /* 두번째 화면 이펙트 */
                    Mains_change(v => !v);
                    
                    change_Scene('None');   /* 다음 화면에 영향이 가지 않게 합니다. */
                },600);
            }
    }

    return(
        <Fragment>
            <div id="star"/>
            <div id="star2"/>
            <div id="star3"/>
            {mains_ ? // 객체 사용시 fragment 로 밖을 감싸주세요.
            <div className={`${Scene}`}> {/* 첫번째 화면일때 보이는 화면입니다. 값이 First_Scene 이여야 보입니다.*/}
                <span id="First_Scene_Name">
                    박상진의 포트폴리오<br></br>
                    프론트엔드 개발자
                </span>
                <div className="scroller_Box" onClick={StartEvents}> {/* 전체화면 누르면 다음화면으로 넘어가는 */}
                    <div className="mouse Centering clickBox"></div> {/* mouse 와 Centering 은 애니메이션 */}
                        <p className="Centering" id="Main_Scroll">Click Anywhere</p>
                </div>
            </div>
            : 
            <div id="_Root">
                <div id='back_space' className={`${Scene}`}> {/* 메인 화면을 보여줍니다. 값이 Second_Scene 이여야 보입니다.*/}
                    <nav><SideBar element={StartEvents}/></nav>
                    <Heads/>
                    <Sections/>
                </div>
            </div>}
        </Fragment>
        
    )
}

export default Base;