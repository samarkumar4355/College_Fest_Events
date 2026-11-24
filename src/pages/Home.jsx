function Home({ events }) {
    let registered = events.filter(event => event.isRegistered)
    let free = events.filter(event => event.fee === 0)
    return (
        <div>
            <h1>College Fest Events</h1>
            <div className="card home-card">
                <p>View and register for college fest events.</p>

                <p>Total Events: {events.length}</p>
                <p>Registered Events: {registered.length}</p>
                <p>Free Events: {free.length}</p>
            </div>
        </div>
    )
}
export default Home