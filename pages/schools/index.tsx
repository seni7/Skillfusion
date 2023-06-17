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
    const [schoolTableList,setSchoolTableList]=useState([]);
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
      title: 'School Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/mainCenters/${record.id}/info`)}>{record.name}</a> 
        </Space>
      ),
      
    },
    {
      title: 'School Amahric Name ',
      dataIndex: 'am_name',
      key: 'am_name',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/mainCenters/${record.id}/info`)}>{record.am_name}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Amharic Short Name',
      dataIndex: 'am_short_code_name',
      key: 'am_short_code_name',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/mainCenters/${record.id}/info`)}>{record.am_short_code_name}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/mainCenters/${record.id}/info`)}>{record.description}</a> 
        </Space>
      ),
      
    },

    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle"> 
            <a onClick={()=>router.push(`/schools/${record.id}/info`)}>Info</a> 
            <a onClick={()=>router.push(`/schools/${record.id}/update`)}>Update</a> 
            <a onClick={()=>deleteList(`/mainCenters/${record.id}`)}>Delete</a> 
          </Space>
        ),
      },
  ];

 const  deleteList = async (courseId) => {
    const response = await makeAuthorizedRequest(courseId, "DELETE", {});
    onFinish()
 } ;
  
  const onFinish = async () => {
    try {
      const response = await makeAuthorizedRequest("mainCenters/search", "POST", {});
 
      openNotification({
        message:'failed to list',
        description:'getting response from course list failed',
        type:'info'
    })

      if (response.ok) {
  
       openNotification({
        message:'failed to list',
        description:'getting response from course list failed',
        type:'info'
    })
    

      } else {  
        openNotification({
            message:'failed to list',
            description:'getting response from course list failed',
            type:'error'})


      }
 
      const result = await response.data; 
      setSchoolTableList(result); 
      console.log(schoolTableList)
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
         <Title  className="mb-15">School List</Title>


         <div className="flex justify-end">
  <Link href="/schools/schools" className="m-7 px-5 py-2 rounded-md border font-bold">Add New School</Link>
</div>

<Table dataSource={schoolTableList} columns={columns} />
       
      </Layouts>
    </>
  );
};

 
 
export default CourseList;
