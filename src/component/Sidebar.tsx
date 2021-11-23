import React ,{ Fragment} from "react";
import {  useDispatch } from 'react-redux';
import '../design.css';
import { sc_contact, sc_home, sc_project } from "./modules/Scene_change";

interface Proper {  // props으로 함수 전달받습니다.
    element:any
}

function SideBar ({element}:Proper) {
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
        <Fragment>
            <div id="SideBar">
            <div className="SideBar_Button_range" id="middle">
                <a href="#" className="sidebar_button" onClick={scene_home}>
                    <svg viewBox="0 1 511 512" fill="currentColor">
                        <path d="M498.7 222.7L289.8 13.8a46.8 46.8 0 00-66.7 0L14.4 222.6l-.2.2A47.2 47.2 0 0047 303h8.3v153.7a55.2 55.2 0 0055.2 55.2h81.7a15 15 0 0015-15V376.5a25.2 25.2 0 0125.2-25.2h48.2a25.2 25.2 0 0125.1 25.2V497a15 15 0 0015 15h81.8a55.2 55.2 0 0055.1-55.2V303.1h7.7a47.2 47.2 0 0033.4-80.4zm-21.2 45.4a17 17 0 01-12.2 5h-22.7a15 15 0 00-15 15v168.7a25.2 25.2 0 01-25.1 25.2h-66.8V376.5a55.2 55.2 0 00-55.1-55.2h-48.2a55.2 55.2 0 00-55.2 55.2V482h-66.7a25.2 25.2 0 01-25.2-25.2V288.1a15 15 0 00-15-15h-23A17.2 17.2 0 0135.5 244L244.4 35a17 17 0 0124.2 0l208.8 208.8v.1a17.2 17.2 0 010 24.2zm0 0" />
                     </svg>
                     <span className="Speech_Bubble">Home</span>
                </a>
            </div>
            <div className="SideBar_Button_range" id="middle">
                <a href="#" className="sidebar_button" onClick={scene_contact}>
                    <svg viewBox="0 0 512 512" fill="currentColor">
                        <path d="M467 76H45a45 45 0 00-45 45v270a45 45 0 0045 45h422a45 45 0 0045-45V121a45 45 0 00-45-45zm-6.3 30L287.8 278a44.7 44.7 0 01-63.6 0L51.3 106h409.4zM30 384.9V127l129.6 129L30 384.9zM51.3 406L181 277.2l22 22c14.2 14.1 33 22 53.1 22 20 0 38.9-7.9 53-22l22-22L460.8 406H51.3zM482 384.9L352.4 256 482 127V385z" />
                    </svg>
                    <span className="Speech_Bubble">Contact</span>
                </a>
            </div>
            <div className="SideBar_Button_range" id="middle">
                <a href="#" className="sidebar_button" onClick={scene_project}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                <span className="Speech_Bubble">Project</span>
                </a>
            </div>
            <div className="SideBar_Button_range" id='foots'>
                <a href="#" onClick={element} className="sidebar_button">
                <svg viewBox="0 0 512 512" fill="currentColor">
                    <path d="M255.2 468.6H63.8a21.3 21.3 0 01-21.3-21.2V64.6c0-11.7 9.6-21.2 21.3-21.2h191.4a21.2 21.2 0 100-42.5H63.8A63.9 63.9 0 000 64.6v382.8A63.9 63.9 0 0063.8 511H255a21.2 21.2 0 100-42.5z" />
                    <path d="M505.7 240.9L376.4 113.3a21.3 21.3 0 10-29.9 30.3l92.4 91.1H191.4a21.2 21.2 0 100 42.6h247.5l-92.4 91.1a21.3 21.3 0 1029.9 30.3l129.3-127.6a21.3 21.3 0 000-30.2z" /></svg>
                <span className="Speech_Bubble">first screen</span>
                </a>
            </div>
            </div>
        </Fragment>
    )
}


export default SideBar;