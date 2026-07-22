import ngos from "./ngoData";
import NGOCard from "../../components/NGOCard/NGOCard";

const NGOs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our NGOs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ngos.map((ngo) => (
          <NGOCard
            key={ngo.id}
            ngo={ngo}
          />
        ))}
      </div>
    </div>
  );
};

export default NGOs;