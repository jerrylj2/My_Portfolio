import React from 'react'
import My_pic from '../images/my_picture.jpg';

function Intro() {
    return (
        <div id="intro">
            <div id="intro_pic_container">
                <img src={My_pic} alt="Me" id="my_pic"></img>
            </div>
            <div id="intro_statement">
                <p>Hi! My name is <strong id="name">Jerry Jackson</strong> and I am a <strong>Software Developer</strong>!</p>
                <p>I am passionate about the creativity in <strong>frontend</strong> development and the logical and critical thinking required for <strong>backend</strong> development.</p>
                <p>Currently, I develop in-house software at <strong id="company">Allstate</strong>. I'm also a credentialed <strong>Actuary</strong>!</p>
            </div>
        </div>
    )
}

export default Intro;