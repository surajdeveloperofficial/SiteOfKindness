const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Dashboard 👋
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">
            Stories Posted
          </h2>
          <p className="text-3xl mt-3">12</p>
        </div>

        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">
            Donations
          </h2>
          <p className="text-3xl mt-3">8</p>
        </div>

        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">
            Events Joined
          </h2>
          <p className="text-3xl mt-3">5</p>
        </div>

        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">
            Volunteer Hours
          </h2>
          <p className="text-3xl mt-3">32</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;