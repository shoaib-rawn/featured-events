import { useState } from 'react';
import EventCard from './EventCard';
import eventsData from '../data/events.json';

function Events() {
  const [events] = useState(eventsData);
  const [search, setSearch] = useState('');

  // Filter events by name based on search
  const filtered = events.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-4">
      <h2 className="mb-4">Featured Events</h2>

      {/* Search input */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search events..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Display filtered events */}
      <div className="d-flex flex-wrap justify-content-start">
        {filtered.map(({ id, name, date, time, location, description }) => (
          <EventCard
            key={id}
            name={name}
            date={date}
            time={time}
            location={location}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
