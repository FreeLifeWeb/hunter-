import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Login from './Login';
import NavBar from './NavBar';
import Registration from './Registration';
import OneCard from './OneCard';
import AddCandidate from './AddCandidate';

export default function App({
  user, allVacancy, allCandidates, OneCardCandidate, vacancies,
}) {
  return (
    <div className="container" style={{ marginTop: 15 }}>
      <NavBar user={user} />

      {/* <Layout.Footer style={{ textAlign: 'center' }}>
          Крутые типочки из Орлов ©2022
        </Layout.Footer> */}
      <Routes>
        <Route path="/" element={<MainPage allVacancy={allVacancy} allCandidates={allCandidates} />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/filter/candidates/:id" element={<OneCard OneCardCandidate={OneCardCandidate} />} />
        <Route path="/new" element={<AddCandidate vacancies={vacancies} />} />
      </Routes>
    </div>
  );
}
