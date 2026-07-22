import { Link } from "react-router-dom";

const VolunteerCard = ({ volunteer }) => {
  return (
    <div className="border rounded-lg shadow-md p-5 hover:shadow-lg transition">
      <img
        src={volunteer.image}
        alt={volunteer.name}
        className="w-28 h-28 rounded-full mx-auto object-cover"
      />

      <h2 className="text-xl font-bold text-center mt-4">
        {volunteer.name}
      </h2>

      <p className="text-center text-gray-600">
        📍 {volunteer.city}
      </p>

      <p className="text-center mt-2">
        <strong>Skill:</strong> {volunteer.skill}
      </p>

      <Link
        to={`/volunteers/${volunteer.id}`}
        className="block mt-5 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        View Profile
      </Link>
    </div>
  );
};

export default VolunteerCard;