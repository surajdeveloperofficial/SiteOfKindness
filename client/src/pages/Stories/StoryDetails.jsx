import { useParams } from "react-router-dom";
import stories from "./storiesData";

const StoryDetails = () => {
  const { id } = useParams();

  const story = stories.find((item) => item.id === Number(id));

  if (!story) {
    return <h2 className="text-center mt-10">Story Not Found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-[450px] object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-8">{story.title}</h1>

      <div className="flex gap-4 mt-4 text-gray-600">
        <span>👤 {story.author}</span>
        <span>📂 {story.category}</span>
      </div>

      <p className="mt-8 text-lg leading-8">
        {story.description}
      </p>

      <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        ❤️ Like Story
      </button>
    </div>
  );
};

export default StoryDetails;