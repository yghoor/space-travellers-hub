import { React, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { retrieveRockets } from './redux/rockets/rockets';

import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveRockets());
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
