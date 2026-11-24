import { Link } from "react-router"

function EventCard({ event, register, unregister }) {
    let seatsLeft = event.totalSeats - event.registered
    return (
        <article className="card">
            <div className="card-info">
                <h2>{event.name}</h2>
                <p>Category: {event.category}</p>
                <p>Date: {event.date}</p>
                <p>Fee: {event.fee === 0 ? "Free" : "₹" + event.fee}</p>
                <p>Seats Left: {seatsLeft}</p>
                {seatsLeft >= 1 && seatsLeft <= 5 && (
                    <p className="badge">Filling Fast</p>
                )}
            </div>
            <div className="card-actions">
                {event.isRegistered ? (
                    <button onClick={() => unregister(event.id)}>
                        Unregister
                    </button>
                ) : seatsLeft === 0 ? (
                    <p className="housefull">Housefull</p>
                ) : (
                    <button onClick={() => register(event.id)}>
                        Register
                    </button>
                )}
                <Link to={"/events/" + event.id}>
                    View Details
                </Link>
            </div>
        </article>
    )
}

export default EventCard