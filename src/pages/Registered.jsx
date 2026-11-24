import EventCard from "../components/EventCard.jsx"

function Registered({ events, register, unregister }) {
    let registeredEvents = events.filter(event => event.isRegistered)

    let totalFee = 0

    registeredEvents.map(event => {
        totalFee = totalFee + event.fee
    })

    return (
        <div>
            <h1>Registered Events</h1>

            {registeredEvents.length === 0 ? (
                <p>No events registered</p>
            ) : (
                <div>
                    <div className="card-container">
                        {registeredEvents.map(event => (
                            <EventCard
                                key={event.id}
                                event={event}
                                register={register}
                                unregister={unregister}
                            />
                        ))}
                    </div>

                    <h3>Total Fee to Pay: ₹{totalFee}</h3>
                </div>
            )}
        </div>
    )
}

export default Registered