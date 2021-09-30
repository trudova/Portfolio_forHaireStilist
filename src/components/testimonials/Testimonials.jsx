import { KeyboardReturn, YouTube } from "@material-ui/icons"
import "./testimonials.scss"

export default function Testimonials() {
    const data = [
    {
      id: 1,
      name: "Kate Durden",

      img:
        "https://images.unsplash.com/photo-1595290293434-555d42427e84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb25kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
     
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",

      img:
        "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGhhaXIlMjBjdXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
     
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Liz Harold",
      img:
        "https://images.unsplash.com/photo-1546561925-a427a021303a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGhhaXIlMjBjdXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
    return (
        <div className="testimonial" id="testimonial">
        <h1>What the people say</h1>
        <div className="container">
            {data.map((d)=>(
            <section className={d.featured ? "card featured": "card"}>
                <div className="top">
                    <KeyboardReturn className="left"/>
                    <img src={d.img} alt="" />
                    <YouTube className="youtube"/>
                </div>
                <div className="centr">
                    {d.desc}
                </div>
                <div className="bottom">
                    <h3>{d.name}</h3>
                </div>
            </section>
            ))}
        </div>
        </div>
    )
}
