// RegisterPage.js
import React from 'react';
import Dashboard from '../../components/dashboard';
import AdminProfile from './AdminProfile';
import UpdateUser from './UpdateUser'
import { Link } from 'react-router-dom';
import { faHome, faUser, faComments, faBinoculars, faIdBadge, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext';


const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/userlogin');
  };

  return (
    <div className="container-fluid">
      <h2 >Admin Dashboard</h2>
      <div className="row border">
        {/* Sidebar */}
    <div id="sidebar" className="col-md-2">

      <div className="nav flex-column  ">
        <Link to="/admindashboard" className="nav-link">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link to="/adminprofile" className="nav-link">
          <FontAwesomeIcon icon={faUser} /> Update / Delete Users
        </Link>
        <Link to="/complaints" className="nav-link">
          <FontAwesomeIcon icon={faComments} /> View Complaints
        </Link>
        <Link to="/regions" className="nav-link">
          <FontAwesomeIcon icon={faBinoculars} /> View Bins / Regions
        </Link>
        <Link to="/profile" className="nav-link">
          <FontAwesomeIcon icon={faIdBadge} /> Admin Profile
        </Link>
        <button onClick={handleLogout} >
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>
    </div>
 

   {/* Main Content */}
   <div className="col-md-10 main-content">
          <h3 className="mt-4 mb-4">General Statistics</h3>

          {/* Rectangles for statistics */}
          <div className="row">
            <div className="col-md-4">
              <div className="rectangle" style={{ backgroundColor: '#e74c3c' }}>
                <h3>Total Complaints</h3>
                <h5>10</h5>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rectangle" style={{ backgroundColor: '#2ecc71' }}>
                <h3>Resolved Complaints</h3>
                <h5>4</h5>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rectangle" style={{ backgroundColor: '#f39c12' }}>
                <h3>Pending Complaints</h3>
                <h5>6</h5>
              </div>
            </div>
            
            </div>
            <div className="row mt-4">
            <div className="col-md-4">
              <div className="rectangle" style={{ backgroundColor: '#2ecc71' }}>
                <h3>Total Users</h3>
                <h5>20</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="rectangle" style={{ backgroundColor: '#2ecc71' }}>
                <h3>Total Drivers</h3>
                <h5>20</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="rectangle" style={{ backgroundColor: '#2ecc71' }}>
                <h3>Total Regions</h3>
                <h5>6</h5>
              </div>
            </div>
          </div>

          {/* Rest of your content */}
          <br></br>
          <h3 >Data Analytics dashbaord will be here, like the given one as examples </h3>
          <img src='https://www.marketsandmarkets.com/Images/smart-waste-management-market.jpg' className='border mt-4 mx-3'></img>
          <img src='https://i.pinimg.com/736x/31/3b/0c/313b0cac443c8d48a83c5c9db207545a.jpg' style={{ width: '540px', height: '318px' }} className='border mt-4'></img>
          
        </div>
        
 </div>
 </div>
  );



};

export default AdminDashboard;
