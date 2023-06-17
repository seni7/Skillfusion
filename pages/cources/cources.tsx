 
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
      const response = await makeAuthorizedRequest("course", "POST", {
     
        course_names: values["course_names"],
        course_codes: values["course_codes"],
        assessment_weights: values["assessment_weights"],
        assessment_pass_mark: values["assessment_pass_mark"],
        course_completion_criteria: values["course_completion_criteria"],
        payment_amount_birr: 0,
        payment_amount_usd: 0,
      
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
              label="Course Names"
              name="course_names"
              rules={[
                {
                  required: true,
                  message: "Please input  Subject Name!",
                },
              ]}
            >
              <Input placeholder="Subject Name" />
            </Form.Item> 
            <Form.Item
              className=""
              label="Course Codes"
              name="course_codes"
              rules={[
                {
                  required: true,
                  message: "Please input  Subject Codes!",
                },
              ]}
            >
              <Input placeholder="course_codes" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Assessment Weights"
              name="assessment_weights"
              rules={[
                {
                  required: true,
                  message: "Please input your Assessment Weights!",
                },
              ]}
            >
              <Input placeholder="Assessment Weights" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Assessment pass mark"
              name="assessment_pass_mark"
              rules={[
                {
                  required: true,
                  message: "Please input  Assessment pass mark!",
                },
              ]}
            >
              <Input placeholder="Assesment pass mark" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Subject Completion Criteria"
              name="course_completion_criteria"
              rules={[
                {
                  required: true,
                  message: "Please input Course Completion Criteria!",
                },
              ]}
            >
              <Input placeholder="Subject Completion Criteria" />
            </Form.Item> 


            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop:100, width: "100%", backgroundColor: "blue" }}
              >
                Course Register
              </Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={()=>router.push('/cources/')}
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
