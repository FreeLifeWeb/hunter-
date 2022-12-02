import React from 'react';

export default function ButtonGroupProf({ prof, changeCategory }) {
  return (
    <button className="btn-container" onClick={(e) => changeCategory(e, prof.id)} type="button">
      {prof.currentVacancy}
    </button>
  );
}
