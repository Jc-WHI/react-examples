import { useState } from "react";
import "./styles.css";

const content = [
    ["this is the first content"],
    ["this is the second content"],
    ["this is the thrid content"],
    ["this is the forth content"]

];

export default function Prac(){
    const [activeContentIndex, setActiveContentIndex] = useState(0);
    return (
        <div>
            <header>
                <div>
                    <h1>react.js test </h1>
                    <p>this is for test </p>

                </div>
            </header>
            <div id = "tab">
                <menu>
                    <button
                    className = {activeContentIndex===0?"active":""}
                    onClick = {()=>setActiveContentIndex(0)}
                    >
                        first button
                    </button>
                    <button
                    className = {activeContentIndex===1?"active":""}
                    onClick = {()=>setActiveContentIndex(1)}
                    >
                        second button
                        </button>

                </menu>
                
            </div>

            <div id = "tab-content">
                <ul>
                    {
                        content[activeContentIndex].map((item)=>(
                            <li key = {item}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}