 
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
      const response = await makeAuthorizedRequest("mainCenters", "POST", {
     
        name: values["name"],
        types: "online",
        am_name: values["am_name"],
        am_short_code_name: values["am_short_code_name"],
        description: values["description"],
      
      });

      if (response.ok) {
        // Store the token in local storage or a state management solution 
        router.push("/schools/"); 
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
  initialValue="My School"
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
  label="Amharic Name"
  name="am_name"
  initialValue="አዲስ አበባ"
  rules={[
    {
      required: true,
      message: "Please input Amharic Name!",
    },
  ]}
>
  <Input placeholder="Amharic Name" />
</Form.Item>
<Form.Item
  className=""
  label="Amharic Name"
  name="am_short_code_name"
  initialValue="አአ"
  rules={[
    {
      required: true,
      message: "Please input Amharic Name!",
    },
  ]}
>
  <Input placeholder="Amharic Name" />
</Form.Item>
<Form.Item
  className=" "
  label="Description"
  name="description"
  initialValue="This is a static description."
  rules={[
    {
      required: true,
      message: "Please input your description",
    },
  ]}
>
  <Input placeholder="Assessment Weights" />
</Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop:100, width: "100%", backgroundColor: "blue" }}
              >
                 Register School 
              </Button>
            </Form.Item>
            <Form.Item>
            <Button onClick={()=>router.push('/schoolbranch/')}
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
