import { useState } from "react";
import "./contact.scss"

export default function Contact() {
const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
    return (
        <div className="contact" id="contact">
       <div className="left">
        <img src="https://images.pexels.com/photos/1546035/pexels-photo-1546035.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
       </div>
       <div className="right">
           <h2 className="contact">Contact</h2>
           <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
       </div>
        </div>
    )
}
