import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/view-appointments">Appointments</Link>
        <Link to="/admin/add-slots">Add Slots</Link>
        <Link to="/admin/availability">Availability</Link>
        <Link to="/admin/reviews">Reviews</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
