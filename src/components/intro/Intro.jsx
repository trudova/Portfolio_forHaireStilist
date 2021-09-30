import "./intro.scss"
import {  KeyboardArrowDownSharp} from "@material-ui/icons"
import {init} from "ityped"
import { useEffect, useRef } from "react"
export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay:1500,
            strings: ["Haire Stylist","Your best Friend", "Person who makes you look babulous"]
        })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgcontainet">
                    <img src="https://images.pexels.com/photos/3993303/pexels-photo-3993303.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there , I'm</h2>
                    <h1>Jane Doe </h1>
                    <h3>AND I AM : <span ref={textRef}></span> </h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDownSharp className="icon"/>
                </a>
            </div>
        </div>
    )
}
