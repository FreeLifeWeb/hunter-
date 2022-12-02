import React from 'react';

// import { } from '@ant-design/icons';
// import { Card } from 'antd';

import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

export default function CardItem({ el, MoreCandidate}) {
  console.log(el);
  return (
    <Card
      style={{ width: 300 }}
      cover={(
        <img
          alt="example"
          src={el.photo}
        />
  )}
      actions={[
        <EditOutlined key="edit" />,
        <EllipsisOutlined onClick={(e) => MoreCandidate(e, el.id)} key="ellipsis" />,
      ]}
    >
      <Card.Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={el.firstName}
        description="вакансия: программист"
      />
    </Card>
  );
}
