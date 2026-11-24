import { Link } from "react-router"

function Navbar({ count }) {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/registered">
                    Registered ({count})
                </Link>
            </nav>
        </header>
    )
}

export default Navbar