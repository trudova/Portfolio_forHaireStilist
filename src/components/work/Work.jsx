import { ArrowBackIos, ArrowForwardIos, PhoneAndroid, EventSeat,CreditCard } from "@material-ui/icons"
import { useState } from "react"
import "./work.scss"

export default function Work() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data =[  {
      id: "1",
      icon: <PhoneAndroid/>,
      title: "Any time for you",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhaXIlMjBjb2xvcmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "2",
      icon: <EventSeat/>,
      title: "for your comfort",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://images.unsplash.com/photo-1605968052444-ba68b5816b2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxoYWlyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: "3",
      icon: <CreditCard/>,
      title: "Best prise for best quality",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMGNvbG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    },]; 
   const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
    return (
        <div className="work" id="work">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
         {data.map( d =>(<div className="container">
          <section className="item">
                <div className="left">
                    <div className="leftContainer">
                        <div className="imgContainer">
                            {d.icon}
                        </div>
                        <h2>{d.title}</h2>
                        <p>{d.desc} </p>
                        <span>Works</span>
                    </div>
                </div>
              
                <div className="right">
                    <img src={d.img} alt="" />
                </div>
          </section>
          </div>
         ))}
      </div>
      <ArrowBackIos className="arrow left"   onClick={() => handleClick("left")}/>
      <ArrowForwardIos  className="arrow right"   onClick={() => handleClick()}/>
        </div>
    )
}
