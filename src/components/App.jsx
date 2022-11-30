import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import NavBar from './NavBar';
import Registration from './Registration';

export default function App({ user }) {
  return (
    <>
      <div className="container" style={{ marginTop: 15 }}>
        <NavBar user={user} />
      </div>
      <Routes>
        <Route path="/reg" element={<Registration />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </>
  );
}
