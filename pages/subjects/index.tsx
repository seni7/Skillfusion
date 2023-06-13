import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Layout from '../../components/Layout'
import GustLayout from "../layout/gustLayout";
import React, { useState, useEffect } from "react";
import { makeAuthorizedRequest } from "../../utils/api";

interface DataType {
  key: React.Key; 

am_name: string;
am_short_code_name: string;
name: string;
created_at: string;
description: string;
id: string; 
number_sub_center: string;
types: string;
updated_at: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
 
//   { title: "am_name", dataIndex: "am_name", key: "1" },
//   { title: "am_short_code_name", dataIndex: "am_short_code_name", key: "2" },
  { title: "Name", dataIndex: "name: string;", key: "3" },
  { title: "Date", dataIndex: "created_at", key: "4" },
  { title: "Description", dataIndex: "description", key: "5" },
//   { title: "number_sub_center", dataIndex: "number_sub_center", key: "6" },
  { title: "Types", dataIndex: "types", key: "7" },
  { title: "Updated", dataIndex: "updated_at", key: "8" },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green", 
//     address: "London Park",
//   },
// ];

const App  = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(  () => { 
    const fetchData = async () => {
        try {
          const response = await makeAuthorizedRequest("mainCenters/search", "POST", {
            include: "",
            limit: 10,
            page: 1,
            filters: [],
            search: {
              value: "",
            },
            sort: [
              {
                field: "created_at",
                direction: "desc",
              },
            ],
          }); 
          const result = await response.data;
    // console.log(JSON.stringify(result))
          setTableData(result);  
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
  }, []);


return (
  <>
    {/* {JSON.stringify(tableData)} */}
     <Layout>
        <Table columns={columns} dataSource={tableData} scroll={{ x: 1300 }} />
    </Layout>
  </>
);
};
export default App;
