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
    const [courseTableList,setCourseTableList]=useState([]);
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
      title: 'Course Name',
      dataIndex: 'course_names',
      key: 'course_names',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/cources/${record.id}/info`)}>{record.course_names}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Course Codes',
      dataIndex: 'course_codes',
      key: 'course_codes',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/cources/${record.id}/info`)}>{record.course_codes}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Assessment Weights',
      dataIndex: 'assessment_weights',
      key: 'assessment_weights',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/cources/${record.id}/info`)}>{record.assessment_weights}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Assessment Pass Mark',
      dataIndex: 'assessment_pass_mark',
      key: 'assessment_pass_mark',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/cources/${record.id}/info`)}>{record.assessment_pass_mark}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Course Completion Criteria',
      dataIndex: 'course_completion_criteria',
      key: 'course_completion_criteria',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/cources/${record.id}/info`)}>{record.course_completion_criteria}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Payment Amount Birr',
      dataIndex: 'payment_amount_birr',
      key: 'payment_amount_birr',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/cources/${record.id}/info`)}>{record.payment_amount_birr}</a> 
        </Space>
      ),
      
    },
    {
      title: 'Payment Amount Usd',
      dataIndex: 'payment_amount_usd',
      key: 'payment_amount_usd',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>router.push(`/cources/${record.id}/info`)}>{record.payment_amount_usd}</a> 
        </Space>
      ),
      
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle"> 
            <a onClick={()=>router.push(`/courses/${record.id}/info`)}>Info</a> 
            <a onClick={()=>router.push(`/courses/${record.id}/update`)}>Update</a> 
            <a onClick={()=>deleteList(`/course/${record.id}`)}>Delete</a> 
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
      setCourseTableList(result); 
      console.log(courseTableList)
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
         <Title  className="mb-15">Course List</Title>

         <div className="flex justify-end">
  <Link href="/cources/cources" className="m-7 px-5 py-2 rounded-md border font-bold">+ Add Course</Link>
</div>


<Table dataSource={courseTableList} columns={columns} />
       
      </Layouts>
    </>
  );
};

 
 
export default CourseList;
