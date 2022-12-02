import React from 'react';

export default function ButtonGroupProf({ otherFilter, changeFilterPointHandler }) {
  const transletedFilters = {
    callScheduled: 'Звоночек',
    sendEmail: 'Письмо отправлено',
    videoAssigned: 'Видео-интервью',
    regected: 'Отказ',
    intervewCastomer: 'Интервью с работой',
    sendResume: 'Резюме отправлено',
    sendOffer: 'Оффер',
  };

  return (
    <button
      name={otherFilter.name}
      onClick={
        (e) => changeFilterPointHandler(e, otherFilter.name)
      }
      className="btn-container"
      type="button"
    >
      {otherFilter.name}
    </button>
  );
}
