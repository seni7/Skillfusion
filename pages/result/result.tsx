 
import React  from "react"; 
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
import Link from "next/link";
// import { DownloadOutlined } from '@mui/icons-material';

const CourseRegister = () => {
  const { Title } = Typography;
  const router = useRouter();
  const onFinish = async (values) => {
    try {
      const response = await makeAuthorizedRequest("course_assessment", "POST", {
     
        name: values["name"],
        courses_id: values["courses_id"],
        assessment_types_id: values["assessment_types_id"],
        assessment_pass_mark: values["assessment_pass_mark"],
        min_number: values["min_number"],
        max_number: values["max_number"],
        min_point: values["min_point"],
        max_point: values["max_point"],
      
      });

      if (response.ok) {
        // Store the token in local storage or a state management solution 
        router.push("/cources/"); 
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
        <Title className="mb-15">Register Subject</Title>

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
                  message: "Please input Assesment Name!",
                },
              ]}
            >
              <Input placeholder="Assesment Name" />
            </Form.Item> 
            <Form.Item
              className=""
              label="Courses Id"
              name="courses_id"
              rules={[
                {
                  required: true,
                  message: "Please input  courses_id!",
                },
              ]}
            >
              <Input placeholder="Courses Id" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Assessment types_id"
              name="assessment_types_id"
              rules={[
                {
                  required: true,
                  message: "Please input your Assessment types_id!",
                },
              ]}
            >
              <Input placeholder="Assessment types_id" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Min Number"
              name="min_number"
              rules={[
                {
                  required: true,
                  message: "Please input Min Number!",
                },
              ]}
            >
              <Input placeholder="Assesment Min Number" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Max Number"
              name="max_number"
              rules={[
                {
                  required: true,
                  message: "Please input Max Number!",
                },
              ]}
            >
              <Input placeholder="Course Completion Criteria" />
            </Form.Item> 
            <Form.Item
              className=" "
              label="Min Point"
              name="min_point"
              rules={[
                {
                  required: true,
                  message: "Please input Min Point!",
                },
              ]}
            >
              <Input placeholder="Payment Min Point" />
            </Form.Item> 
            <Form.Item
              className=" "
              label="Max Point"
              name="max_point"
              rules={[
                {
                  required: true,
                  message: "Please input Max Point!",
                },
              ]}
            >
              <Input placeholder="Payment Max Point" />
            </Form.Item>

            
            <Form.Item>
              <Button onClick={()=>router.push('/result/')}
                type="primary"
              
                style={{ marginTop:100, width: "100%", backgroundColor: "blue" }}
              >
                Close
              </Button>
            </Form.Item>
          </div>
        </Form>
        {/* </Col>  */}
        {/* </Row>  */}
      </Layouts>
    </>
  );
};

export default CourseRegister;
