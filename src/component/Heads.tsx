import '../design.css';
import React, { useState } from "react";
import img1 from './img/sidebar-icon-17.png'
import { useDispatch } from 'react-redux';
import { sc_contact, sc_home, sc_project } from './modules/Scene_change';

function StartTimer() { // 시간 작동
    let clockStr:string;
    
    const run = () => {
        const time = new Date();
        let hours = time.getHours().toString();
        let minutes = time.getMinutes().toString();
        const el = document.getElementById('clock')!;

        if (parseInt(hours) <= 12) {
            if(minutes.length <= 1){
                clockStr = ' AM ' + hours + ' : 0' + minutes;
            } else {
                clockStr = ' AM ' + hours + ' : ' + minutes;
            }
        } else {
            if(minutes.length <= 1){
                clockStr = ' PM ' + (time.getHours() - 12) + ' : 0' + minutes;
            } else {
                clockStr = ' PM ' + (time.getHours() - 12) + ' : ' + minutes;
            }
        }
        if(el){
            el.innerHTML = clockStr;
        }
    }
    setInterval(run , 1000);
}

(function() {
    StartTimer();   // 즉시 실행 함수
})()



function Heads(){
    const [showMenus , showMenu] = useState(false);
    const menudrop=() => {
        if(showMenus) {
            showMenu(false);
        }else {
            showMenu(true);
        }
    }
    const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

    const scene_home = () => {
        dispatch(sc_home());
    }
    const scene_contact = () => {
        dispatch(sc_contact());
    }
    const scene_project = () => {
        dispatch(sc_project());
    }
    return(
        
        <header id="Headse">
            
            <div id="Heads_Name">
                PortFolio
                <span id="Heads_Name_2">Sj</span>
            </div>
            <div id="profile_name">
            <svg className="profile" viewBox="-42 0 512 512" fill="currentColor">
                <path d="M210.4 246.6c33.8 0 63.2-12.1 87.1-36.1 24-24 36.2-53.3 36.2-87.2 0-33.9-12.2-63.2-36.2-87.2-24-24-53.3-36.1-87.1-36.1-34 0-63.3 12.2-87.2 36.1S87 89.4 87 123.3c0 33.9 12.2 63.2 36.2 87.2 24 24 53.3 36.1 87.2 36.1zm-66-189.3a89.1 89.1 0 0166-27.3c26 0 47.5 9 66 27.3a89.2 89.2 0 0127.3 66c0 26-9 47.6-27.4 66a89.1 89.1 0 01-66 27.3c-26 0-47.5-9-66-27.3a89.1 89.1 0 01-27.3-66c0-26 9-47.6 27.4-66zm0 0M426.1 393.7a304.6 304.6 0 00-12-64.9 160.7 160.7 0 00-13.5-30.3c-5.7-10.2-12.5-19-20.1-26.3a88.9 88.9 0 00-29-18.2 100.1 100.1 0 00-37-6.7c-5.2 0-10.2 2.2-20 8.5-6 4-13 8.5-20.9 13.5-6.7 4.3-15.8 8.3-27 11.9a107.3 107.3 0 01-66 0 119.3 119.3 0 01-27-12l-21-13.4c-9.7-6.3-14.8-8.5-20-8.5a100 100 0 00-37 6.7 88.8 88.8 0 00-29 18.2 114.4 114.4 0 00-20.1 26.3 161 161 0 00-13.4 30.3A302.5 302.5 0 001 393.7c-.7 9.8-1 20-1 30.2 0 26.8 8.5 48.4 25.3 64.4C41.8 504 63.6 512 90.3 512h246.5c26.7 0 48.6-8 65.1-23.7 16.8-16 25.3-37.6 25.3-64.4a437 437 0 00-1-30.2zm-44.9 72.8c-11 10.4-25.4 15.5-44.4 15.5H90.3c-19 0-33.4-5-44.4-15.5C35.2 456.3 30 442.4 30 424c0-9.5.3-19 1-28.1A272.9 272.9 0 0141.7 338a131 131 0 0110.9-24.7A84.8 84.8 0 0167.4 294a59 59 0 0119.3-12 69 69 0 0123.6-4.5c1 .5 3 1.6 6 3.6l21 13.6c9 5.6 20.4 10.7 34 15.1a137.3 137.3 0 0084.5 0c13.7-4.4 25.1-9.5 34-15.1a2721 2721 0 0027-17.2 69 69 0 0123.7 4.5 59 59 0 0119.2 12 84.5 84.5 0 0114.9 19.4c4.5 8 8.2 16.3 10.8 24.7a275.2 275.2 0 0110.8 57.8c.6 9 1 18.5 1 28.1 0 18.5-5.3 32.4-16 42.6zm0 0" />
                </svg>
            </div>
            <span id="profile_name_2">P_sangJin</span>
            <div>
                <span id="clock" />
            </div>
            <div onClick={menudrop} className="phone_menu">
            <img src={img1} id="sidebars"></img>
            </div>
            {showMenus ? 
            <div className="phone_menu">
                <div className="dropbox phone_home" onClick={scene_home}>Home</div>
                <div className="dropbox phone_contact" onClick={scene_contact}>Contact</div>
                <div className="dropbox phone_project" onClick={scene_project}>Project</div>
            </div>:null}
        </header>
    )
    }


export default Heads;