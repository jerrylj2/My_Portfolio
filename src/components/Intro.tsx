import React from 'react'
import My_pic from '../images/my_picture.jpg';

function Intro() {
    return (
        <div id="intro">
            <div id="intro_pic_container">
                <img src={My_pic} alt="Me" id="my_pic"></img>
            </div>
            <div id="intro_statement">
                <p>Hi! My name is <strong id="name">Jerry Jackson</strong> and I am a <strong>Frontend & Automation Engineer</strong>!</p>
                <p>I am <strong>passionate</strong> about Software Engineering and I look forward to solving <strong>challenging</strong> problems with the best solution.</p>
                <p>Currently, I develop in-house software at <strong id="company">Allstate</strong>. I'm also a credentialed <strong>Actuary</strong>!</p>
            </div>
        </div>
    )
}

export default Intro;