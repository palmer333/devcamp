import { Table } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import employeeList from "./data";
import { Button } from "antd";

function Employee() {
  let navigate = useNavigate();
  let param = useParams();

  let result = [];
  if (param.department) {
    result = employeeList.filter((x) => x.department === param.department);
  } else {
    result = employeeList;
  }

  const employeeDetailFunc = (e, i) => {
    e.preventDefault();
    navigate("/employee-detail", {
      replace: true,
      state: employeeList[i],
    });
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Employee Detail",
      dataIndex: "employeeDetail",
      key: "employeeDetail",
      render: (t, r) => (
        <Button
          type="primary"
          onClick={(e) => employeeDetailFunc(e, employeeList.indexOf(r))}
        >
          Employee Detail
        </Button>
      ),
    },
  ];

  return (
    <div style={{ margin: "50px" }}>
      <h2>Employee List</h2>
      <Table dataSource={result} columns={columns} pagination={false} />
    </div>
  );
}

export default Employee;