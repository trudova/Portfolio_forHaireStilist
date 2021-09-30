import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {haireColoring, haireCut, styleSelectiom, haireTreatment} from "../../data"
export default function Portfolio() {
    const [selected , setSelected]=useState("hair")
    const [data , setData]=useState([])

    const list=[
        {
      id: "hair",
      title: " Haire coloring",
    },
    {
      id: "haircut",
      title: "Haire cut",
    },
    {
      id: "color",
      title: "Style  selectiom",
    },
    {
      id: "design",
      title: "Haire  treatment",
    },
    
    ];
    useEffect(()=>{
        switch(selected){
            case "hair":
                setData(haireColoring)
                break;
            case "haircut":
                setData(haireCut)
                        break;
                 case "color":
                setData(styleSelectiom)
                        break;
                 case "design":
                setData(haireTreatment)
                        break;
                        default:
                            setData(haireColoring)
        }
    },[selected])
    return (
        <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
            {list.map(item=>(
                <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected}
                id={item.id}/>
            ))}
            {/* <li className="active"> Haire coloring</li>
            <li> Haire Cut</li>
            <li> Style  selectiom</li>
            <li> Haire  treatment</li> */}
        </ul>
        <div className="container">
            {data.map((d)=>(
             <div className="item">
                <img src={d.img} alt="" />
                <h3>{d.title}</h3>
            </div>
            ))}
            

        </div>
        </div>
    )
}
