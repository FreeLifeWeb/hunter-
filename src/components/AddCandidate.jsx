import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
} from 'antd';
import axios from 'axios';

export default function AddCandidate({ vacancies }) {
  const [input, setInput] = useState({
    avatar: null, firstName: '', lastName: '', age: '', vacancyId: '', experience: '', email: '', telephone: '', fileResume: '',
  });
  console.log(input, 'INPUTTS');
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const changeHandler2 = (e) => setInput((prev) => (
    { ...prev, [e.target.name]: e.target.files[0] }));
  const selectChanger = (value) => setInput((prev) => ({ ...prev, vacancyId: Number(value) }));
  const addHandler = (inputData) => {
    const data = new FormData();
    data.append('avatar', inputData.avatar);
    data.append('firstName', inputData.firstName);
    data.append('lastName', inputData.lastName);
    data.append('age', inputData.age);
    data.append('vacancyId', inputData.vacancyId);
    data.append('experience', inputData.experience);
    data.append('email', inputData.email);
    data.append('telephone', inputData.telephone);
    data.append('fileResume', inputData.fileResume);
    axios.post('/new', data);
    window.location.href = '/';
  };
  const selectOptions = vacancies.map((el) => ({
    value: el.id,
    label: el.currentVacancy,
  }));
  return (
    <Form
      className="container"
      style={{
        marginTop: 8,
      }}
      onFinish={() => addHandler(input)}
    >
      <Form.Item label="Photo">
        <input type="file" id="avatar" name="avatar" onChange={changeHandler2} />
      </Form.Item>
      <Form.Item label="Name" value={input.firstName}>
        <Input name="firstName" onChange={changeHandler} />
      </Form.Item>
      <Form.Item label="Surname" value={input.lastName}>
        <Input name="lastName" onChange={changeHandler} />
      </Form.Item>
      <Form.Item
        label="Age"
        onChange={changeHandler}
      >
        <Input
          value={input.age}
          name="age"
        />
      </Form.Item>
      <Form.Item label="Vacation">
        <Select
          value={input.vacancyId}
          onChange={(value) => selectChanger(value)}
          name="vacancyId"
          showSearch
          placeholder="Select a vacation"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
          options={selectOptions}
        />
      </Form.Item>
      <Form.Item label="Working experience" value={input.experience}>
        <Input.TextArea rows={5} name="experience" onChange={changeHandler} />
      </Form.Item>
      <Form.Item
        label="Email"
        value={input.email}
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input
          name="email"
          onChange={changeHandler}
        />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        onChange={changeHandler}
      >
        <Input
          name="telephone"
          value={input.telephone}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        value={input.fileResume}
        name="fileResume"
      >
        <Input type="file" className="form-control" id="customFile" name="fileResume" onChange={changeHandler2} />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
        >
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
