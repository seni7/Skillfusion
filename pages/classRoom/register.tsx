 
import React  from "react"; 
import { useRouter } from "next/router"; 
import { 
  Button, 
  Typography,
  Form,
  Input,
  Select
} from "antd"; 
 
import { makeAuthorizedRequest } from "../../utils/api";
import Layouts from "../../components/Layout"; 
import { useState, useEffect } from 'react';

const StudentRegister = () => {
  const { Title } = Typography;
  const router = useRouter();
  const onFinish = async (values) => {
    try {
      const response = await makeAuthorizedRequest("session", "POST", {
        
        mcenters_id:values['mcenters_id'], 
        scenters_id:values['scenters_id'], 
        c_id:values['c_id'], 
        ayears_id:values['ayears_id'], 
        term:values['term'], 
        name:values['name'],
        party:[]
      });

      if (response.ok) {
        // Store the token in local storage or a state management solution 
        router.push("/Student/list"); 
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchOptions = async () => {
    try {
      const response = await makeAuthorizedRequest('mainCenters/search',"POST");
      const data = response.data;
      setOptions(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);
  

  return (
    <>
      <Layouts>
        <Title className="mb-15">ClassRoom Register</Title>

        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="row-col "
        >
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
              
              <Select>
          {options.map((option) => (
            <Select.Option key={option.value} value={option.id}>
              {option.name}
            </Select.Option>
          ))}
        </Select>
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
              Register ClassRoom
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
      </Layouts>
    </>
  );
};

export default StudentRegister;
