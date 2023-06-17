import React from "react";
import { useRouter } from "next/router";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";

import { makeAuthorizedRequest } from "../../utils/api";
import Layouts from "../../components/Layout";
// import { DownloadOutlined } from '@mui/icons-material';

const SchoolRegister = () => {
  const { Title } = Typography;
  const router = useRouter();
  const onFinish = async (values) => {
    try {
      const response = await makeAuthorizedRequest("mainCenters", "POST", {
        name: values["name"],
        types: "online",
        am_name: values["am_name"],
        am_short_code_name: values["am_short_code_name"],
        description: values["description"],
      });

      if (response.data) {
        // Store the token in local storage or a state management solution
        router.push("/schools");
        router.push("/schools");
      } else {
        console.error("registration failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Layouts>
        <Title className="mb-15">Register School</Title>

        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="row-col "
        >
          <div className="space-x-2 grid grid-cols-3">
            <Form.Item
              className=""
              label="School Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input School Name!",
                },
              ]}
            >
              <Input placeholder="School Name" />
            </Form.Item>
            <Form.Item
              className=""
              label="country  "
              name="am_name"
              rules={[
                {
                  required: true,
                  message: "Please input country !",
                },
              ]}
            >
              <Input placeholder="Country Name" />
            </Form.Item>
            <Form.Item
              className=""
              label="Short Code"
              name="am_short_code_name"
              rules={[
                {
                  required: true,
                  message: "Please input short code Name!",
                },
              ]}
            >
              <Input placeholder="short code Name" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your description",
                },
              ]}
            >
              <Input.TextArea size="large" placeholder="Description" />
            </Form.Item>
             
            <Form.Item>
            <div className="flex justify-between space-x-2">
              <Button
                type="primary"
                htmlType="submit" 
                style={{
                  marginTop:  50, 
                  width: "50%",
                  height:"50%",
                  backgroundColor: "blue",
                }}
              >
                Register School
              </Button> 
              <Button
                onClick={() => router.push("/schools")}
                type="primary"
                style={{
                  marginTop:  50, 
                  width: "50%",
                  height:"50%",
                  backgroundColor: "blue",
                }}
              >
                Close
              </Button>
              </div>
            </Form.Item> 
          </div>
        </Form>
      </Layouts>
    </>
  );
};

export default SchoolRegister;
