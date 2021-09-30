import "./topbar.scss"
import {Mail, Person} from "@material-ui/icons"
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar" + (menuOpen ? " active": "")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">JANE DOE <sup>hair.</sup></a>
                    <div className="itemComtainer">
                    <Person className="icon"/>
                    <span>+1 347 613 5276</span>
                    </div>
                    <div className="itemComtainer">
                    <Mail className="icon"/>
                    <span>liubovtrudovaaplying@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                   <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                       <span className="line1"></span>
                       <span className="line2"></span>
                       <span className="line3"></span>
                   </div>
                </div>
            </div>
        </div>
    )
}
