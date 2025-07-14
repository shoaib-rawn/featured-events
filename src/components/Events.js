import { useState } from 'react';
import EventCard from './EventCard';
import eventsData from '../data/events.json';

function Events() {
  const [events] = useState(eventsData);
  const [search, setSearch] = useState('');

  const filtered = events.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-4">
      <h2>Featured Events</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search events..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="d-flex flex-wrap justify-content-start">
        {filtered.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Events;