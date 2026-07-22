import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{event.title}</h2>

        <p className="text-gray-600 mt-2">
          📍 {event.city}
        </p>

        <p className="text-gray-600">
          📅 {event.date}
        </p>

        <p className="mt-3 text-gray-700">
          {event.description}
        </p>

        <Link
          to={`/events/${event.id}`}
          className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;