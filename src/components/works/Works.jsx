import "./works.scss";
import {useState} from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const sliderData = [
    {
        id: 1,
        title: "Work title-1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ipsa rerum consectetur! Illo, impedit. In eveniet autem, beatae tempora totam earum qui dolore architecto. Quos odit totam dolor quas laboriosam",
        img: "https://images.unsplash.com/photo-1573496267765-9254e55d9384?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        title: "Work title-2",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ipsa rerum consectetur! Illo, impedit. In eveniet autem, beatae tempora totam earum qui dolore architecto. Quos odit totam dolor quas laboriosam",
        img: "https://images.unsplash.com/photo-1573496267765-9254e55d9384?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        title: "Work title-3",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ipsa rerum consectetur! Illo, impedit. In eveniet autem, beatae tempora totam earum qui dolore architecto. Quos odit totam dolor quas laboriosam",
        img: "https://images.unsplash.com/photo-1573496267765-9254e55d9384?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
]






function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (direction)=> {
        if (direction ==="prev") {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide);

        } else if (direction === "next") {
            setCurrentSlide(currentSlide < sliderData.length - 1 ? currentSlide +1 : currentSlide);
        }
    };
    return (
       <section className="works" id="works">
           <div className="works__slider" 
           style ={{transform: `translateX(-${currentSlide * 100}vw)`}}>
               {sliderData.map((dataItem)=> (
                         <div className="works__slider-inner"
                         key={`${dataItem.title}_${dataItem.id}`}>
                         <div className="works__slider-item">
                             <div className="works__slider-left">
                                 <div className="works__slider-left-container">
                                     <h2>
                                         {dataItem.title}
                                     </h2>
                                     <p> {dataItem.description} </p>
                                     <span>Project</span>
                                 </div>
                             </div>
                             <div className="works__slider-right">
                                 <img src={dataItem.img} 
                                 alt="{dataItem.title}" />
                             </div>
      
                         </div>
                     </div>

               ))};
           </div>
           <button className="works__slider-btn works__slider-btn-prev">
               <ArrowBackIosIcon className="works__slider-arrow" onClick={()=> 
            handleClick("prev")}/>
           </button>
           <button className="works__slider-btn works__slider-btn-next">
               <ArrowForwardIosIcon className="works__slider-arrow" onClick={()=> 
            handleClick("next")}/>
           </button>
    
       </section>
    )
}

export default Works
