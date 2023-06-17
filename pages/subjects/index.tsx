import { useState, useEffect } from "react";
import React , { useMemo } from "react"; 
import { useRouter } from "next/router";  
import {  Space ,Table} from 'antd'; 

import { Typography } from "antd";  
 
import { makeAuthorizedRequest } from "../../utils/api";
import Layouts from "../../components/Layout"; 
import Link from "next/link";
 

const CourseList = () => {
    const [courseTableList,setCourseTableList]=useState([]); 
 

  const { Title } = Typography;

  const router = useRouter();
  const columns = [
    {
      title: 'Subject Name',
      dataIndex: 'course_names',
      key: 'course_names',
  
    },
    {
      title: 'Subject Codes',
      dataIndex: 'course_codes',
      key: 'course_codes',
     
      
    },
    {
      title: 'Assessment Weights',
      dataIndex: 'assessment_weights',
      key: 'assessment_weights', 
    },
    {
      title: 'Assessment Pass Mark',
      dataIndex: 'assessment_weights',
      key: 'assessment_pass_mark',
    
      
    },
    {
      title: 'Subject Completion Criteria',
      dataIndex: 'course_completion_criteria',
      key: 'course_completion_criteria',
     
      
    },
  
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle"> 
            <a onClick={()=>router.push(`/subjects/${record.id}/info`)}>Info</a> 
            <a onClick={()=>router.push(`/subjects/${record.id}/update`)}>Update</a> 
            <a onClick={()=>deleteList(`course/${record.id}`)}>Delete</a> 
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
         <Title  className="mb-15">Subjects List</Title>

         <div className="flex justify-end">
  <Link href="/subjects/register" className="m-7 px-5 py-2 rounded-md border font-bold">+ Add Subjects</Link>
</div>


<Table dataSource={courseTableList} columns={columns} />
       
      </Layouts>
    </>
  );
};

 
 
export default CourseList;
