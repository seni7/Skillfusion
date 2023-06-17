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
    const [courseAssesTableList,setCourseAssesTableList]=useState([]);
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
      title: 'Assesment Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/course_assessment/${record.id}/info`)}>{record.course_names}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Subject',
      dataIndex: 'courses_id',
      key: 'courses_id',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/course_assessment/${record.id}/info`)}>{record.courses_id}</a> 
        </Space>
      ),
      
    },
    {
      title: 'ClassRoom',
      dataIndex: 'session_id',
      key: 'session_id',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/course_assessment/${record.id}/info`)}>{record.session_id}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Assessment Types',
      dataIndex: 'assessment_types_id',
      key: 'assessment_types_id',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/course_assessment/${record.id}/info`)}>{record.assessment_types_id}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Min Number',
      dataIndex: 'min_number',
      key: 'min_number',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/course_assessment/${record.id}/info`)}>{record.min_number}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Max Number',
      dataIndex: 'max_number',
      key: 'max_number',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/course_assessment/${record.id}/info`)}>{record.max_number}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Min Point',
      dataIndex: 'min_point',
      key: 'min_point',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/course_assessment/${record.id}/info`)}>{record.min_point}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Max Point',
      dataIndex: 'max_point',
      key: 'max_point',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/course_assessment/${record.id}/info`)}>{record.max_point}</a> 
        </Space>
      ),
      
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle"> 
            <a onClick={()=>router.push(`/result/${record.id}/info`)}>Info</a> 
            <a onClick={()=>router.push(`/result/${record.id}/update`)}>Update</a> 
            <a onClick={()=>deleteList(`/course_assessment/${record.id}`)}>Delete</a> 
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
      const response = await makeAuthorizedRequest("course/search", "POST", {});
 
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
      setCourseAssesTableList(result); 
      console.log(courseAssesTableList)
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
         <Title  className="mb-15">Assesment List</Title>

         <div className="flex justify-end">
  <Link href="/result/result" className="m-7 px-5 py-2 rounded-md border font-bold">+ Add Assesment</Link>
</div>


<Table dataSource={courseAssesTableList} columns={columns} />
       
      </Layouts>
    </>
  );
};

 
 
export default CourseList;
