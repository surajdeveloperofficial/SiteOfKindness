import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import Dashboard from "../pages/Dashboard";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import Stories from "../pages/Stories/Stories";
import StoryDetails from "../pages/Stories/StoryDetails";
import Volunteers from "../pages/Volunteers/Volunteers";
import VolunteerDetails from "../pages/Volunteers/VolunteerDetails";

import NGOs from "../pages/NGOs/NGOs";
import NGODetails from "../pages/NGOs/NGODetails";
import Events from "../pages/Events/Events";
import EventDetails from "../pages/Events/EventDetails";


function AppRoutes() {
  return (
    <BrowserRouter>
    <Layout><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/stories" element={<Stories />} />
         <Route path="/stories/:id" element={<StoryDetails />} />
         <Route path="/volunteers" element={<Volunteers />} />
         <Route path="/ngos" element={<NGOs />} />
<Route path="/ngos/:id" element={<NGODetails />} />
<Route path="/volunteers/:id" element={<VolunteerDetails />} />
<Route path="/events" element={<Events />} />
<Route path="/events/:id" element={<EventDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>  </Layout>
    
      
    </BrowserRouter>
  );
}

export default AppRoutes;