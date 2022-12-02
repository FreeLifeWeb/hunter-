import React, { useEffect, useState } from 'react';
import {
  Card, Checkbox, Button, Input,
} from 'antd';

// const { Meta } = Card;

export default function OneCard({ OneCardCandidate }) {
  console.log('-------------', OneCardCandidate);
  const [isEdit, setIsEdit] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    telephone: '',
  });
  const [data, setData] = useState(OneCardCandidate || []);

  const editHandler = () => {
    setIsEdit((prev) => !prev);
  };
  const checkboxHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: !prev[e.target.name] }));
  };
  //   useEffect(() => {
  //     // console.log('data:', data);
  //     fetch(`/onecard/candidate/${candidate.id}`, {
  //       method: 'PATCH',
  //       headers: { 'Content-type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });
  //   }, [data]);
  //   const changeHandler = (e) => {
  //     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   };
  //   const telephoneHandler = async (e) => {
  //     e.preventDefault();
  //     const response = await fetch(`/onecard/telephone/edit/${candidate.id}`, {
  //       method: 'PATCH',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ telephone: inputs.telephone }),
  //     });
  //     if (response.ok) {
  //       setInputs({
  //         telephone: '',
  //         email: '',
  //       });
  //     }
  //   };
  //   const emailHandler = async (e) => {
  //     setIsEdit((prev) => !prev);
  //     e.preventDefault();
  //     console.log(inputs);
  //     const response = await fetch(`/onecard/email/edit/${candidate.id}`, {
  //       method: 'PATCH',
  //       headers: { 'Content-type': 'application/json' },
  //       body: JSON.stringify({ email: inputs.email }),
  //     });
  //     if (response.ok) {
  //       setInputs({
  //         telephone: '',
  //         email: '',
  //       });
  //     }
  //   };
  return (
    <Card
      title="info"
     // hoverable
      style={{
        width: 400,
        height: 900,
      }}
      cover={<img alt="example" src={data.photo} />}
    >
      <Card.Meta
        title={data.firstName}
        description="contacts:phone, email"
      />
      {isEdit
        ? (
          <div>
            <form>
              <Input
                type="text"
                value={inputs.email}
                // onChange={changeHandler}
                name="email"
                placeholder="Email"
              />
              <Button
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  width: 100,
                  height: 30,
                }}
                type="primary"
                // onClick={(e) => emailHandler(e)}
              >
                Save email
              </Button>
              <Input
                type="text"
                value={inputs.telephone}
                // onChange={changeHandler}
                name="telephone"
                placeholder="Phone"
              />
              <Button
                style={{
                  marginTop: 10,
                  width: 100,
                  height: 30,
                }}
                type="primary"
                // onClick={(e) => telephoneHandler(e)}
              >
                Save Phone
              </Button>
            </form>
          </div>
        ) : ''}
      {!isEdit && (
      <div style={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'start',
      }}
      >
        {/* <Checkbox type="checkbox" name="sendEmail" onChange={checkboxHandler} checked={data.sendEmail} id="flexCheckDefault1">кондидату было отправлено письмо-приглашение</Checkbox>
        <Checkbox type="checkbox" name="callScheduled" onChange={checkboxHandler} checked={data.callScheduled} id="flexCheckDefault2">кондидату был назначен звонок-скрининг</Checkbox>
        <Checkbox type="checkbox" name="videoAssigned" onChange={checkboxHandler} checked={data.videoAssigned} id="flexCheckDefault3">кондидату было назначено видеоинтервью</Checkbox>
        <Checkbox type="checkbox" name="sendResume" onChange={checkboxHandler} checked={data.sendResume} id="flexCheckDefault4">резюме кондидата было передано заказчику</Checkbox>
        <Checkbox type="checkbox" name="intervewCastomer" onChange={checkboxHandler} checked={data.intervewCastomer} id="flexCheckDefault5">кондидату назначено интервью с заказчиком</Checkbox>
        <Checkbox type="checkbox" name="regected" onChange={checkboxHandler} checked={data.regected} id="flexCheckDefault6">кондидату был выслан отказ</Checkbox> */}
      </div>
      )}
      <div style={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      >
        <Button
          style={{
            marginTop: 10,
            width: 150,
            height: 40,
          }}
          type="primary"
          onClick={editHandler}
        >
          Edit
        </Button>
        <Button
          style={{
            marginTop: 10,
            width: 150,
            height: 40,
          }}
          type="primary"
        >
          Download PDF
        </Button>
      </div>
    </Card>
  );
}
