import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faComments, faBinoculars, faIdBadge, faSignOutAlt, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext';

const BinsRegions = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/userlogin');
  };

  const [regions, setRegions] = useState([
    {
      regionCode: 'R001',
      regionName: 'Mingora Bhaipass',
      regionDriver: 'Driver A',
      driverPhone: '123-456-7890',
      regionStatus: 'Active',
    },
    {
        regionCode: 'R002',
        regionName: 'Saidu Main Road',
        regionDriver: 'Driver A',
        driverPhone: '123-456-7890',
        regionStatus: 'Active',
      },
    {
        regionCode: 'R003',
        regionName: 'HajiBaba Chowk',
        regionDriver: 'Driver B',
        driverPhone: '123-456-7890',
        regionStatus: 'Active',
      },
    {
        regionCode: 'R004',
        regionName: 'Nishat Chowk',
        regionDriver: 'Driver C',
        driverPhone: '123-456-7890',
        regionStatus: 'Active',
     }
  ]);

  const handleRegionStatusChange = (regionCode) => {
    setRegions((prevRegions) =>
      prevRegions.map((region) =>
        region.regionCode === regionCode
          ? { ...region, regionStatus: region.regionStatus === 'Active' ? 'Inactive' : 'Active' }
          : region
      )
    );
  };

  return (
    <div className="container-fluid">
      <h2>Admin Dashboard</h2>
      <div className="row border">
        {/* Sidebar */}
        <div id="sidebar" className="col-md-2">
          <div className="nav flex-column">
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
            <button onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-10 main-content">
          <h3 className="mt-4 mb-4">Region Section</h3>

          {/* Regions List */}
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Region Code</th>
                <th>Region Name</th>
                <th>Region Driver</th>
                <th>Driver Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {regions.map((region) => (
                <tr key={region.regionCode}>
                  <td>{region.regionCode}</td>
                  <td>{region.regionName}</td>
                  <td>{region.regionDriver}</td>
                  <td>{region.driverPhone}</td>
                  <td>{region.regionStatus}</td>
                  <td>
                    <button
                      className={`btn btn-${region.regionStatus === 'Active' ? 'success' : 'danger'} btn-sm me-2`}
                      onClick={() => handleRegionStatusChange(region.regionCode)}
                    >
                      <FontAwesomeIcon icon={region.regionStatus === 'Active' ? faToggleOn : faToggleOff} />
                      {region.regionStatus === 'Active' ? ' Deactivate' : ' Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BinsRegions;
