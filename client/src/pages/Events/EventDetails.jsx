import { useParams } from "react-router-dom";
import events from "./eventData";

const EventDetails = () => {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <div className="text-center mt-10 text-2xl font-bold">
        Event Not Found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[450px] object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-8">
        {event.title}
      </h1>

      <div className="flex gap-6 mt-4 text-gray-600">
        <span>📍 {event.city}</span>
        <span>📅 {event.date}</span>
      </div>

      <p className="mt-8 text-lg leading-8">
        {event.description}
      </p>

      <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
        Join Event
      </button>
    </div>
  );
};

export default EventDetails;