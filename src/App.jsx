import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router"

import eventsData from "./data/events.js"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Events from "./pages/Events.jsx"
import EventDetails from "./pages/EventDetails.jsx"
import Registered from "./pages/Registered.jsx"

import "./App.css"

function App() {
    const [events, setEvents] = useState(eventsData)

    function register(id) {
        setEvents(events.map(event => {
            if (event.id === id && !event.isRegistered && event.registered < event.totalSeats) {
                return {
                    ...event,
                    isRegistered: true,
                    registered: event.registered + 1
                }
            }
            return event
        }))
    }

    function unregister(id) {
        setEvents(events.map(event => {
            if (event.id === id && event.isRegistered) {
                return {
                    ...event,
                    isRegistered: false,
                    registered: event.registered - 1
                }
            }
            return event
        }))
    }

    let count = events.filter(event => event.isRegistered).length

    return (
        <BrowserRouter>
            <Navbar count={count} />

            <Routes>
                <Route path="/" element={<Home events={events} />} />

                <Route path="/events" element={
                    <Events
                        events={events}
                        register={register}
                        unregister={unregister}
                    />
                } />

                <Route path="/events/:id" element={
                    <EventDetails
                        events={events}
                        register={register}
                        unregister={unregister}
                    />
                } />

                <Route path="/registered" element={
                    <Registered
                        events={events}
                        register={register}
                        unregister={unregister}
                    />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App