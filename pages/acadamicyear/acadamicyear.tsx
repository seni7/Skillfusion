 
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
// import { DownloadOutlined } from '@mui/icons-material';

const CourseRegister = () => {
  const { Title } = Typography;
  const router = useRouter();
  const onFinish = async (values) => {
    try {
      const response = await makeAuthorizedRequest("acadamic_year", "POST", {
     
        acadamic_year: values["acadamic_year"],
        start_date: values["start_date"],
        end_date: values["end_date"],
      
      });

      if (response.ok) {
        // Store the token in local storage or a state management solution 
        router.push("/acadamicyear/"); 
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
  label="Acadamic Year"
  name="acadamic_year"
  rules={[
    {
      required: true,
      message: "Please input Acadamic Year!",
    },
  ]}
>
  <Input placeholder="Acadamic Year" />
</Form.Item> 
<Form.Item
  className=""
  label="Start Date"
  name="start_date"
 
  rules={[
    {
      required: true,
      message: "Please input Start Date!",
    },
  ]}
>
  <Input placeholder="Start Date" />
</Form.Item>
<Form.Item
  className=""
  label="End Date"
  name="end_date"
 
  rules={[
    {
      required: true,
      message: "Please input End Date!",
    },
  ]}
>
  <Input placeholder="End Date" />
</Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop:100, width: "100%", backgroundColor: "blue" }}
              >
                 Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
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
