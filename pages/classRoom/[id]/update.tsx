 import React  from "react"; 
 import {useState ,useEffect}  from "react"; 
import { useRouter } from "next/router"; 
import { Typography, Skeleton, Input , Form ,Button} from 'antd';
 
import { makeAuthorizedRequest } from "../../../utils/api";
import Layouts from "../../../components/Layout"; 

const ClassRoomUpdate = () => {

  const router = useRouter();
  const { id } = router.query;
  const [initFormValue,setInitFormValue] = useState({})
  const [loading , setLoading] = useState(true)


useEffect(() => {onInit()},[])
 
  const { Title } = Typography; 
  const onFinish = async (values) => {
    try {
      const response = await makeAuthorizedRequest(`session/${1}`, "PATCH", { 
        mcenters_id:values['mcenters_id'], 
        scenters_id:values['scenters_id'], 
        c_id:values['c_id'], 
        ayears_id:values['ayears_id'], 
        term:values['term'], 
        name:values['name'],
        party:[]
      });

      if (response.data) {
        
        router.push("/classRoom"); 
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  const onInit = async () => { 
      const response = await makeAuthorizedRequest(`session/${id}`, "GET");

      if (response.data) { 
        setLoading(false)
        setInitFormValue(response.data); 
      } else {
        console.error("Login failed");
      }
 
      setLoading(false) 
    }
 

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Layouts>
        
        <Title className="mb-15">ClassRoom Update Information</Title>
      {loading ?  <Skeleton/>  :  
          <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={initFormValue}
          layout="vertical"
          className="row-col "  >
          <div className="space-x-2 grid grid-cols-3">
            <Form.Item
              className=""
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input Name!",
                },
              ]}
            >
              <Input placeholder="User Name" />
            </Form.Item> 
            <Form.Item
              className=" "
              label="Term"
              name="term"
              rules={[
                {
                  required: true,
                  message: "Please input Term!",
                },
              ]}
            >
              <Input placeholder="Term" />
            </Form.Item>
            <Form.Item
              className=" "
              label="School"
              name="mcenters_id"
              rules={[
                {
                  required: true,
                  message: "Please Select School Name!",
                },
              ]}
            >
              <Input placeholder="School" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Branch"
              name="scenters_id"
              rules={[
                {
                  required: true,
                  message: "Please Select Branch Name!",
                },
              ]}
            >
              <Input placeholder="Branch" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Curriculum"
              name="c_id"
              rules={[
                {
                  required: true,
                  message: "Please Select Curriculum Name!",
                },
              ]}
            >
              <Input placeholder="Curriculum" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Year"
              name="ayears_id"
              rules={[
                {
                  required: true,
                  message: "Please Select Year!",
                },
              ]}
            >
              <Input placeholder="Year" />
            </Form.Item>
 
           
          </div>

          <div className="flex space-x-3 justify-end">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%", backgroundColor: "blue" }}
              >
              Update ClassRoom
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%", backgroundColor: "blue" }}

              >
                Close
              </Button>
            </Form.Item>
          </div>
        </Form> 
         }
  
      </Layouts>
    </>
  ); 
};

export default ClassRoomUpdate;
