import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      // key: "avatar",
      render: (t, x) => <img src={x.avatar} alt={x.avatar} />,
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/users").then((result) => {
      setData(result.data);
    });
  }, []);
  return <Table dataSource={data} columns={columns} pagination={false} />;
}
