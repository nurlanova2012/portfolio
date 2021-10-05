import {useEffect, useRef} from "react";
import {init} from "ityped";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./intro.scss";

function Intro() {
   const animatedTextRef = useRef();

   useEffect(()=> {
       init(animatedTextRef.current, {
           showCursor: true,
           backDelay: 1500,
           backSpeed: 60,
           strings: ["React. JS Developer"]
       })
   }, []);

    return (
       <section className="intro" id="intro">
        <div className="intro__left">
            <div className="intro__img-wrapper">
            <img src="https://media.istockphoto.com/photos/profile-side-photo-of-concentrated-skilled-web-expert-afro-american-picture-id1218017051?b=1&k=20&m=1218017051&s=170667a&w=0&h=5W2TR300wgYONVieb-HBSLYi9jPkOVJcoYoTJWcB2Ms=" alt="pic of coder" />

            </div>
        </div>
        <div className="intro__right">
            <div className="intro__right-inner">
            <h1>Aizirek Nurlanbekova</h1>
            <h2>Coding</h2>
            <h3>Design</h3>
            <h4>
                <span ref={animatedTextRef} >
                    
                </span>
            </h4>
            <a href="#portfolio">
                <KeyboardArrowDownIcon className="intro__icon"/>
            </a>

            </div>
        </div>
       </section>
    )
}

export default Intro;
