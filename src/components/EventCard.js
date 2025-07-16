import React from 'react';

function EventCard({ name, description, date, time, location }) {
  return (
    <div className="card m-2 shadow" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Location:</strong> {location}</p>
        <button className="btn btn-primary">Register</button>
      </div>
    </div>
  );
}

export default EventCard;
