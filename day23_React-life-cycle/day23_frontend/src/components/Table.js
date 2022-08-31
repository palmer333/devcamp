import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import Buttons from '../components/Button'



const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'product_name',
    dataIndex: 'product_name',
    key: 'product_name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'stock_left',
    dataIndex: 'stock_left',
    key: 'stock_left',
  },
  {
    title: 'category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Edit',
    dataIndex: 'Edit',
    key: 'Edit',
    render: (_, record) => (
      <>
            <Buttons />
      </>  
      )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a> */}
        <a>Delete</a>
      </Space>
    ),
  },
];

class Tables extends React.Component {
  constructor() {
      super();
      this.state = {
        product: []
      }
  }

  componentDidMount() {
      axios.get(`http://localhost:3000/users/api/product/`)
          .then(res => {
              const product = res.data;
              this.setState({ product });
          })
  }

  render() {
      return (
          <Table columns={columns} dataSource={this.state.product} />
      )
  }
}


export default Tables;