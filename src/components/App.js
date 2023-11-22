import React, {  useEffect, useState } from "react";
import '../styles/App.css';



const App = () => {

    const [renderBall,setRenderBall] = useState(false);
    const [posi,setPosi] = useState(0);
    const [ballPosition,setBallPosition] = useState({left:0,top:0});
    
    function move(l,t){
        setBallPosition({
            left :ballPosition.left +l,
            top:ballPosition.top + t,
        })
         
    }

    const handleListener =  (event)=>{
        switch(event.keyCode){
           
            case 39 :
                move(5,0);
            break;
        }
    };
    // bind ArrowRight keydown event
    useEffect(()=> {
        document.addEventListener("keydown",handleListener);
        return () => document.removeEventListener("keydown",handleListener);
    },[ballPosition]);
  
    const buttonClickHandler = () => {
        setRenderBall(true);
   };
    const renderBallOrButton = () => {
		if (renderBall) {
		    return <div className="ball" style={{
                left : ballPosition.left +"px",
                top : ballPosition.top + "px",
                position: "absolute",
            }}></div>
		} else {
		    return <button className="start" onClick={buttonClickHandler} >start</button>
		}
    };

   
   
    return  <div className="playground"> {renderBallOrButton()}</div>;
};


export default App;