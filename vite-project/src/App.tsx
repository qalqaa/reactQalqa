import "./App.css";
import { Table } from "antd";
import type {ColumnsType} from "antd/es/table"

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

function App() {
  return (
    <>
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
}

export default App;
