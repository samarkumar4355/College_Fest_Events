import { useParams } from "react-router"
import EventCard from "../components/EventCard"

function EventDetails({ events, register, unregister }) {
    const { id } = useParams()

    let event = events.find(event => String(event.id) === id)

    if (!event) {
        return <p>Event not found</p>
    }

    return (
        <div>
            <h1>Event Details</h1>

            <EventCard
                event={event}
                register={register}
                unregister={unregister}
            />

            <p>Venue: {event.venue}</p>
            <p>Coordinator: {event.coordinator}</p>
            <p>Total Seats: {event.totalSeats}</p>
            <p>Registered Count: {event.registered}</p>
        </div>
    )
}

export default EventDetails