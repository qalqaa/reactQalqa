<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
=======
import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button } from "antd";

import "./App.css";

interface DataType {
  country: string;
  name: string;
}

const LIMIT_LIST_SCHOOL = 20;

const columns: ColumnsType<DataType> = [
  {
    title: "Страна",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Название школы",
    dataIndex: "name",
    key: "name",
  },
];

function App() {
  const [page, setPage] = useState<number>(0);

  const [dataSource, setDataSource] = useState<DataType[]>();

  const getUniversity = async (page: number, limit: number) => {
    const res = await axios.get(
      `http://universities.hipolabs.com/search?offset=${page}&limit=${limit}`
    );
    setDataSource(res.data);
  };

  useEffect(() => {
    getUniversity(page, LIMIT_LIST_SCHOOL);
  }, [page]);
>>>>>>> Stashed changes

  return (
    <>
      <div>
<<<<<<< Updated upstream
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
=======
        <Table pagination={false} dataSource={dataSource} columns={columns} />
        <Button
          type="primary"
          onClick={() => setPage(page - 1)}
          disabled={!page}
        >
          Назад
        </Button>
        <Button type="primary" onClick={() => setPage(page + 1)}>
          Вперед
        </Button>
        <div>Страница: {page + 1}</div>
>>>>>>> Stashed changes
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
