import { Link } from "react-router"

function Navbar({ count }) {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/registered">
                Registered ({count})
            </Link>
        </nav>
    )
}

export default Navbar