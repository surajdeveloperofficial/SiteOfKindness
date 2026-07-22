import { Link } from "react-router-dom";

const StoryCard = ({ story }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <span className="text-sm text-blue-600">
          {story.category}
        </span>

        <h2 className="text-xl font-bold mt-2">
          {story.title}
        </h2>

        <p className="mt-2 text-gray-600">
          {story.description}
        </p>

        <p className="mt-3 text-sm">
          By {story.author}
        </p>

        <Link
          to={`/stories/${story.id}`}
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;