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

  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default App;
