import { useState, FormEvent, useEffect } from "react";
import React , { useMemo } from "react"; 
import { useRouter } from "next/router"; 
import type { NotificationPlacement } from 'antd/es/notification/interface';
import { Button, Divider, Space, notification ,Table} from 'antd'; 

import { Typography } from "antd"; 
// import { 
//     RadiusUprightOutlined,
//   } from '@ant-design/icons';
 
import { makeAuthorizedRequest } from "../../utils/api";
import Layouts from "../../components/Layout"; 
 
export type SF_Notification =
{
    type: 'success'|'error'|'warning' | 'info'|'open',
    message:string,
    description:string,
    placement?:'bottomRight'|'bottomLeft'|'topRight'|'topLeft'

 
};

const StudentList = () => {
    const [studentTableList,setStudentTableList]=useState([]);
    const [api, contextHolder] = notification.useNotification(); 
  
  const Context = React.createContext({ name: 'Default' });
   
    const openNotification = (data : SF_Notification) => {
        api[`${data['type']}`]({ 
            message:data['message'],
            description:data['description'],
            placement:data['placement']
        }); 
      };

  const { Title } = Typography;

  const router = useRouter();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/student/${record.id}/info`)}>{record.first_name +' '+record.last_name}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle"> 
            <a onClick={()=>router.push(`/student/${record.id}/info`)}>Info</a> 
            <a onClick={()=>router.push(`/student/${record.id}/update`)}>Update</a> 
            <a onClick={()=>deleteList(`student/${record.id}`)}>Delete</a> 
          </Space>
        ),
      },
  ];

 const  deleteList = async (studentId) => {
    const response = await makeAuthorizedRequest(studentId, "DELETE", {});
    onFinish()
 } ;
  
  const onFinish = async () => {
    try {
      const response = await makeAuthorizedRequest("student/search", "POST", {});
 
      openNotification({
        message:'failed to list',
        description:'getting response from student list failed',
        type:'info'
    })

      if (response.ok) {
  
       openNotification({
        message:'failed to list',
        description:'getting response from student list failed',
        type:'info'
    })
    

      } else {  
        openNotification({
            message:'failed to list',
            description:'getting response from student list failed',
            type:'error'})


      }
 
      const result = await response.data; 
      setStudentTableList(result); 
      console.log(studentTableList)
    } catch (error) {
        
      console.error("An error occurred", error);
    }

    

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);
 
  
  useEffect(()=>{
    onFinish();  
  },[])

  return (
    <>
      <Layouts>
         <Context.Provider value={contextValue}>
            {contextHolder} 
            </Context.Provider>
         <Title  className="mb-15">Student List</Title>




<Table dataSource={studentTableList} columns={columns} />
       
      </Layouts>
    </>
  );
};

 
 
export default StudentList;
