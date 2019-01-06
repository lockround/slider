import React,{useState, useEffect} from 'react';
import slides from './slideData/slides';
import Slide from './Slide'
import {FaHome, FaPlay, FaPause, FaForward, FaBackward} from 'react-icons/fa';

const SLIDE_DURATION = 3000;

function Slider() {
    let [currentIndex, setCurrentIndex] = useState(0);
    let [isPlaying, setIsPlaying] = useState(true);
    let timeout;
    useEffect(() => {
        if(isPlaying){
            timeout = setTimeout(() => {
                setCurrentIndex((currentIndex+1) % slides.length);
            }, SLIDE_DURATION);
        }
        return () => {
            clearTimeout(timeout);
        }
        
    },[currentIndex,isPlaying])
    
    
    return(
        <div>
            <Slide {...slides[currentIndex]}/>
            <div style={{fontSize:'3em', display:'flex', justifyContent:'space-around'}}>
                <div
                onClick={() => {
                    setCurrentIndex(0);
                }}
                >
                    <FaHome/>
                </div>
                <div>
                    {isPlaying?<div
                        onClick={() => {
                        setIsPlaying(false);
                        }}>
                        <FaPause/>
                    </div>:
                    <div
                        onClick={() => {
                        setIsPlaying(true);
                        }}>
                        <FaPlay/>
                    </div>
                    }
                </div>
                <div
                onClick={() => {setCurrentIndex((currentIndex+1) % slides.length)}}>
                    <FaForward/>
                </div>
                <div
                onClick={() => {setCurrentIndex((currentIndex-1+slides.length) % slides.length)}}>
                    <FaBackward/>
                </div>
                </div>
        </div>)
}

export default Slider;