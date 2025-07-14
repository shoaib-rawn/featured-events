function EventCard({ event }) {
  return (
    <div className="card m-2 shadow" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">{event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <button className="btn btn-primary">Register</button>
      </div>
    </div>
  );
}

export default EventCard;