import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

import start from '../../assets/dockbar-icon/start.png'
import Button from '../Button'

import { startButtonClicked, openNotepad, openResume} from '../../store/actions/actions';

import notepadImg from '../../assets/dockbar-icon/notepad.png'
import resumeImg from '../../assets/dockbar-icon/Myresume.png'

const StyledDockbarGroup=styled.div`
    height: 100%;
    display: inline-block;
`
const StyledGroup = styled.div`
    height: 100%;
    display: flex;
`;



function DockbarGroup({showStart, notepad, resume, onStartClick, onNotepadClick, onResumeClick}){
    const notepadButton = notepad.show?
    <Button
        id="notepad-button"
        pressed={!notepad.minimized && !notepad.blurred}
        clicked={()=> onNotepadClick()}
    >
        <div>
            <img src={notepadImg} alt="notepad" /* style={{width:'20px', height:'20px'}} */   />
            <span>Untitled - 메모장</span>
        </div>
    </Button> : null;

    const resumeButton = resume.show?
    <Button
        id="resume-button"
        pressed={!resume.minimized && !resume.blurred}
        clicked={()=> onResumeClick()}
    >
        <div>
            <img src={resumeImg} alt="resume" style={{width:'16px', height:'18px', marginRight:'2px'}}   />
            <span>자기소개서</span>
        </div>
    </Button> : null;

    return (
        <StyledDockbarGroup>
            <StyledGroup>
                <Button
                    id="StartButton"
                    clicked={()=>onStartClick()}
                    pressed={showStart}
                    pad="0"
                >
                    <div>
                        <img 
                            src={start} 
                            alt="start"
                        />
                        <b>시작</b>
                    </div>
                </Button>
                {notepadButton}
                {resumeButton}
            </StyledGroup>
        </StyledDockbarGroup>
    );
};

const mapStateToProps = (state) => {
    return {
      showStart: state.showStart,
      notepad: state.notepad,
      showModal: state.showModal,
      resume: state.resume
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      onStartClick: () => dispatch(startButtonClicked()),
      onNotepadClick: () => dispatch(openNotepad()),
      onResumeClick: () => dispatch(openResume()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DockbarGroup);