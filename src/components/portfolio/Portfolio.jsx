import {useState, useEffect} from "react";
import {featured, webApps, reactApps} from "../db"
import "./portfolio.scss";
import {PortfolioCatItems} from "../index"

function Portfolio() {
const [selected, setSelected] = useState("featured");
const [data, setDate] = useState([]);


useEffect(()=> {
    switch(selected) {
        case 'web apps':
            setDate(webApps);
            break;
        case 'react apps':
            setDate(reactApps);
            break;
        default:
            setDate(featured);
            break;
    }

    // if (selected === 'featured') {
    //     setDate(featured);
    // } else if (selected === 'web apps') {
    //     setDate(webApps);
    // } else if (selected === 'react apps') {
    //     setDate(reactApps);
    // } else {
    //     setDate(featured);
    // }
}, [selected]);



const portfolioCatItems = [
    {
      id: 1,
      category: "featured",
      title: "Featured"
    },
    {
      id: 2,
      category: "web apps",
      title: "Web Apps"
        },
        {
            id: 3,
            category: "react apps",
            title: "React Apps"
            },
]

    return (
        <section className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <ul className="portfolio__cat">
             {portfolioCatItems.map((item)=> (
                 <PortfolioCatItems item={item.title} 
                 key={`${item.title}_${item.id}`}
                 active={selected === item.category}
                 setSelected={setSelected}
                 category={item.category}/>
            ))}
                      
       
            </ul>

            <div className="portfolio__list">
                {data.map((dataItem)=> (

                      <div className="portfolio__item" 

                      key={`${dataItem.title}_${dataItem.id}`}>
                      <img src={dataItem.img} alt={dataItem.title} />
                      <h4>{dataItem.title}</h4>
                  </div>
                ))
                }
            </div>
        </section>
    )

}

export default Portfolio;
