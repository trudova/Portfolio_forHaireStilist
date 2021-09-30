import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " +(menuOpen && " active")}>
            <ul onClick={()=> setMenuOpen(false)}>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#work">Works</a>
                </li>
                <li>
                    <a href="#testimonial">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
    )
}
