import { Link } from "react-router-dom";

const NGOCard = ({ ngo }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={ngo.image}
        alt={ngo.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{ngo.name}</h2>

        <p className="text-gray-600 mt-2">
          📍 {ngo.city}
        </p>

        <p className="text-blue-600 mt-1">
          {ngo.category}
        </p>

        <p className="mt-3 text-gray-700">
          {ngo.description}
        </p>

        <Link
          to={`/ngos/${ngo.id}`}
          className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default NGOCard;