import volunteers from "./volunteerData";
import VolunteerCard from "../../components/VolunteerCard/VolunteerCard";

const Volunteers = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Volunteers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.map((volunteer) => (
          <VolunteerCard
            key={volunteer.id}
            volunteer={volunteer}
          />
        ))}
      </div>
    </div>
  );
};

export default Volunteers;