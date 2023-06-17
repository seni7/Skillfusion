import { useState , useEffect } from "react";
import React  from "react";
import { useRouter } from "next/router"; 
import {  Button, Space, Table } from "antd"; 
import { Typography } from "antd";  
import { makeAuthorizedRequest } from "../../utils/api";
import Layouts from "../../components/Layout";
import { setNotification} from "../../store/notification";
import { useDispatch } from "react-redux";
import { HdrPlusOutlined, PlusOneOutlined } from "@mui/icons-material";
 

const ClassRoom = () => {
  const dispatch = useDispatch()
  const [classRoomTableList, setClassRoomTableList] = useState([]);
  const { Title } = Typography;
  const router = useRouter();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => router.push(`/classRoom/${record.id}/info`)}>
            {record.name  }
          </a>
        </Space>
      ),
    },
    {
      title: "Curriculum",
      dataIndex: "curriculum",
      key: "curriculum",
      render: (_, record) => (
        <Space size="middle">
          <a >
            {record?.curriculum?.name_en }
          </a>
        </Space>
      ),
    },
    {
      title: "School",
      dataIndex: "school",
      key: "school",
      render: (_, record) => (
        <Space size="middle">
          <a >
            {record?.main_center?.name }
          </a>
        </Space>
      ),
    },
    {
      title: "Academic Year",
      dataIndex: "acadamic_year",
      key: "acadamic_year",
      render: (_, record) => (
        <Space size="middle">
          <a >
            {record?.acadamic_year?.acadamic_year }
          </a>
        </Space>
      ),
    },
    {
      title: "School Branch",
      dataIndex: "school_branch",
      key: "school_branch",
      render: (_, record) => (
        <Space size="middle">
          <a >
            {record?.sub_center?.name }
          </a>
        </Space>
      ),
    }, 
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => router.push(`/classRoom/${record.id}/info`)}>Info</a>
          <a onClick={() => router.push(`/classRoom/${record.id}/update`)}>
            Update
          </a>
          {/* <a onClick={() => deleteList(`session/${record.id}`)}>Delete</a> */}
        </Space>
      ),
    },
  ];

  const deleteList = async (id) => {
    const response = await makeAuthorizedRequest(id, "DELETE", {});
    if(response?.data?.id == id) {
          dispatch(setNotification({
            message: "Successfully Deleted",
            description: "",
            type: "success",
          })) 
    }else{
        dispatch(setNotification({
            message: "Failed to Delete",
            description: "",
            type: "error",
          }))
    }
    onFinish();
  };

  const onFinish = async () => {
    try {
      const response = await makeAuthorizedRequest(
        "session/search",
        "POST",
        {}
      );
  
      const result = await response.data;
      setClassRoomTableList(result); 
    } catch (error) { 
    }
  };
 
  useEffect(() => {
    onFinish();
  }, []);

  return (
    <>
      <Layouts> 
        <div className=" flex justify-between">
        <Title className="mb-15">Class Rooms List</Title> 
        <a > <Button  onClick={()=>router.push('/classRoom/register')} > + Add New</Button></a>
        </div>
        <Table dataSource={classRoomTableList} columns={columns} />
      </Layouts>
    </>
  );
};

export default ClassRoom;
