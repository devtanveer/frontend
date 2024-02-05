// Complaint.js
import Dashboard from '../../components/dashboard';
import AdminProfile from './AdminProfile';
import UpdateUser from './UpdateUser'
import { Link } from 'react-router-dom';
import { faHome, faUser, faComments, faBinoculars, faIdBadge, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext';
import React, { useState } from 'react';
import { faPlay, faCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'; // Import Modal from react-bootstrap

const AdminComplaint = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
  
    const handleLogout = () => {
      logout();
      navigate('/userlogin');
    };

    
    const [selectedDriver, setSelectedDriver] = useState('');
    const [assignedDrivers, setAssignedDrivers] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [drivers] = useState(['Driver 1 ', 'Driver 2 ', 'Driver 3 ']);
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleDriverSelection = (driver) => {
      setSelectedDriver(driver);
      handleCloseModal();
    };
  
    const handleAssignToDriver = (complaintId) => {
      setAssignedDrivers((prevAssignedDrivers) => ({
        ...prevAssignedDrivers,
        [complaintId]: selectedDriver,
      }));
      setSelectedDriver('');
      console.log(`Assigning complaint ${complaintId} to ${selectedDriver}.`);
    };
  
    const renderAssignedDriver = (complaintId) => {
      const assignedDriver = assignedDrivers[complaintId];
      return assignedDriver ? (
        <span>
          Assigned to: {assignedDriver}{' '}
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
        </span>
      ) : (
        <span>Not Assigned</span>
      );
    };


  const [complaints, setComplaints] = useState([
    {
      id: 1,
      binPhoto: 'https://c8.alamy.com/comp/2C51KB9/caucasian-man-in-denim-suit-throws-away-a-plastic-bag-with-a-garbage-to-junk-container-outdoors-at-countryside-in-summer-2C51KB9.jpg',
      location: 'Street A, City X',
      userName: 'Tanveer Faisal',
      userPhone: '123-456-7890',
      binAddress: '123 Main St, City X',
      status: 'New', // Initial status
    },
    {
      id: 2,
      binPhoto: 'https://c8.alamy.com/comp/2G104B2/overloaded-dumpster-full-garbage-container-household-garbage-bin-trash-can-heap-of-unsorted-rubbish-plastic-bags-pile-of-refuse-litter-waste-2G104B2.jpg',
      location: 'Street B, City Y',
      userName: 'Adnan Khan',
      userPhone: '987-654-3210',
      binAddress: '456 Side St, City Y',
      status: 'New', // Initial status
    },
    {
      id: 3,
      binPhoto: 'https://gaskellswaste.co.uk/wp-content/uploads/2019/09/commercial-bin-collections.jpg',
      location: 'Street C, City Z',
      userName: 'Salman Khan',
      userPhone: '555-123-4567',
      binAddress: '789 Up St, City Z',
      status: 'New', // Initial status
    },
    {
      id: 4,
      binPhoto: 'https://media.gettyimages.com/id/89020648/photo/large-recycling-bin-full-of-discarded-plastic-containers.jpg?s=1024x1024&w=gi&k=20&c=h6KorC9d3It6BWUHfBBuoqSeEGx8b1IEH-cH6uwQkXo=',
      location: 'Street D, City W',
      userName: 'Abdullah',
      userPhone: '111-222-3333',
      binAddress: '567 Down St, City W',
      status: 'New', // Initial status
    },
  ]);

  const handleStatusChange = (complaintId, newStatus) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === complaintId ? { ...complaint, status: newStatus } : complaint
      )
    );
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
          <h3 className="mt-4 mb-4">Garbage Bin Complaints</h3>

          {/* Complaints List */}
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Bin Photo</th>
                  <th>Location</th>
                  <th>User Name</th>
                  <th>User Phone</th>
                  <th>Bin Address</th>
                  <th>Status</th>
                  <th>Assigned Driver</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td>{complaint.id}</td>
                    <td>
                      <img
                        src={complaint.binPhoto}
                        alt={`Bin Photo ${complaint.id}`}
                        style={{ width: '100px', height: '100px' }}
                      />
                    </td>
                    <td>{complaint.location}</td>
                    <td>{complaint.userName}</td>
                    <td>{complaint.userPhone}</td>
                    <td>{complaint.binAddress}</td>
                    <td>{complaint.status}</td>
                    <td>{renderAssignedDriver(complaint.id)}</td>
                    <td>
                        
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-info btn-sm dropdown-toggle mx-2"
                          onClick={() => {
                            setSelectedDriver('');
                            handleShowModal();
                          }}
                        >
                          <FontAwesomeIcon icon={faUserAlt}  className='mx-2' /> Assign
                        </button>
                        <Modal show={showModal} onHide={handleCloseModal}>
                          <Modal.Header closeButton>
                            <Modal.Title>Assign Driver</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            {drivers.map((driver) => (
                              <Button
                                key={driver}
                                variant="primary"
                                onClick={() => handleDriverSelection(driver) }
                              >
                                {driver}
                              </Button>
                            ))}
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleStatusChange(complaint.id, 'In Progress')}
                      >
                        <FontAwesomeIcon icon={faPlay} /> In Progress
                      </button>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleStatusChange(complaint.id, 'Resolved')}
                      >
                        <FontAwesomeIcon icon={faCheck} /> Resolved
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdminComplaint;
