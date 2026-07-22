import { useParams } from "react-router-dom";
import ngos from "./ngoData";

const NGODetails = () => {
  const { id } = useParams();

  const ngo = ngos.find((item) => item.id === Number(id));

  if (!ngo) {
    return <h2>NGO Not Found</h2>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <img
        src={ngo.image}
        alt={ngo.name}
        className="w-full h-96 object-cover rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-6">{ngo.name}</h1>

      <p className="mt-3">📍 {ngo.city}</p>

      <p className="mt-2">Category: {ngo.category}</p>

      <p className="mt-6">{ngo.description}</p>
    </div>
  );
};

export default NGODetails;