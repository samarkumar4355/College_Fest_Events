import { useState } from "react"
import EventCard from "../components/EventCard"
function Events({ events, register, unregister }) {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")

    let filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || event.category === category)
    )
    return (
        <div>
            <h1>All Events</h1>

            <input
                type="text"
                placeholder="Search events"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <select
                value={category}
                onChange={e => setCategory(e.target.value)}
            >
                <option>All</option>
                <option>Technical</option>
                <option>Cultural</option>
                <option>Sports</option>
            </select>

            <div className="card-container">
                {filteredEvents.map(event => (
                    <EventCard
                        key={event.id}
                        event={event}
                        register={register}
                        unregister={unregister}
                    />
                ))}
            </div>
        </div>
    )
}

export default Events