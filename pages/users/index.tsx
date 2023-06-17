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
import Link from "next/link";
 
export type SF_Notification =
{
    type: 'success'|'error'|'warning' | 'info'|'open',
    message:string,
    description:string,
    placement?:'bottomRight'|'bottomLeft'|'topRight'|'topLeft'

 
};

const CourseList = () => {
    const [userTableList,setUserTableList]=useState([]);
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
          <a onClick={()=>router.push(`/users/${record.id}/info`)}>{record?.profile?.first_name +' '+record?.profile?.father_name}</a> 
        </Space>
      ),
      
    },

    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',

      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/users/${record.id}/info`)}>{record.role}</a> 
        </Space>
      ),
    },
  
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',

      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/users/${record.id}/info`)}>{record.email}</a> 
        </Space>
      ),
    },
    
    {
      title: 'Phone_number',
      dataIndex: 'phone_number',
      key: 'phone_number',

      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/users/${record.id}/info`)}>{record.phone_number}</a> 
        </Space>
      ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle"> 
            <a onClick={()=>router.push(`/users/${record.id}/info`)}>Info</a> 
            <a onClick={()=>router.push(`/users/${record.id}/update`)}>Update</a> 
            <a onClick={()=>deleteList(`users/${record.id}`)}>Delete</a> 
          </Space>
        ),
      },
  ];

 const  deleteList = async (userId) => {
    const response = await makeAuthorizedRequest(userId,"DELETE", {});
    onFinish()
 } ;
  
  const onFinish = async () => {
    try {
      const response = await makeAuthorizedRequest("users/search", "POST", {
        include:"profile",
      });
 
      openNotification({
        message:'failed to list',
        description:'getting response from users list failed',
        type:'info'
    })

      if (response.ok) {
  
       openNotification({
        message:'failed to list',
        description:'getting response from users list failed',
        type:'info'
    })
    

      } else {  
        openNotification({
            message:'failed to list',
            description:'getting response from users list failed',
            type:'error'})


      }
 
      const result = await response.data; 
      setUserTableList(result); 
      console.log(userTableList)
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
         <Title  className="mb-15">User List</Title>

         <div className="flex justify-end">
  <Link href="/users/users" className="m-7 px-5 py-2 rounded-md border font-bold">Add Users</Link>
</div>


<Table dataSource={userTableList} columns={columns} />
       
      </Layouts>
    </>
  );
};

 
 
export default CourseList;
