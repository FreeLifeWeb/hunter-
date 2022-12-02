import React from 'react';
import { Pagination } from 'antd';
import CardItem from './CardItem';
import ButtonGroupProf from './ButtonGroupProf';
import ButtonGroupOther from './ButtonGroupOther';

const obj = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

export default function MainPage({ allVacancy, allCandidates }) {
  const filterPoint = [{ name: 'allcandidate' }, { name: 'callScheduled' },
    { name: 'sendEmail' }, { name: 'videoAssigned' }, { name: 'sendResume' },
    { name: 'sendOffer' }, { name: 'regected' }, { name: 'intervewCastomer' }];

  const [vacancy, setVacancy] = React.useState(allVacancy || []);
  const [candidates, setCandidates] = React.useState(allCandidates || []);
  const [category, setCategory] = React.useState({ specialist: [] });
  const [otherCategory, setOtherCategory] = React.useState({});

  console.log('Доп фильтры', otherCategory);
  console.log('Осн фильтры', category);

  const [pagination, setPagination] = React.useState(3);

  const submitFilter = async () => {
    const response = await fetch('/filter/candidates/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...otherCategory, vacancyId: category }),
    })
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  };

  const onChangePagination = (page) => {
    console.log(page);
    setPagination(page);
  };

  const changeCategory = (e, id) => { // кладет id категории в state
    setCategory((prev) => (prev.specialist.includes(id)
      ? { specialist: prev.specialist.filter((el) => el !== id) }
      : { specialist: [...prev.specialist, id] }));
  };

  const changeFilterPointHandler = (e, name) => { // кладет параметр фильтрации в state
    if (Object.keys(otherCategory).includes(name)) {
      setOtherCategory((prev) => (delete prev.name));
    } else {
      setOtherCategory((prev) => ({ ...prev, [e.target.name]: true }));
    }
  };

  const MoreCandidate = async (e, id) => {
    const response = await fetch(`/filter/candidates/${id}`, {
      method: 'GET',
    });
    if (response.ok) {
      window.location.href = `/filter/candidates/${id}`;
    }
  };

  return (
    <div className="content-container">
      <div className="filters">
        <div className="categories">
          {vacancy?.map((prof) => (
            <ButtonGroupProf
              prof={prof}
              changeCategory={changeCategory}
              key={prof.id}
            />
          ))}
        </div>
        <div className="other-filters">
          {filterPoint?.map((otherFilter) => (
            <ButtonGroupOther
              otherFilter={otherFilter}
              changeFilterPointHandler={changeFilterPointHandler}
              key={otherFilter.id}
            />
          ))}
          <button className="btn-filter" onClick={submitFilter} type="button">Отфильтровать</button>
        </div>
      </div>
      <div className="content-cards">
        {candidates.map((el) => <CardItem el={el} key={el.id} MoreCandidate={MoreCandidate} />)}
      </div>
      <Pagination
        className="pagination"
        current={pagination}
        onChange={onChangePagination}
        total={50}
      />
    </div>
  );
}
