 
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
  Select
} from "antd"; 
 
import { makeAuthorizedRequest } from "../../utils/api";
import Layouts from "../../components/Layout";
// import { DownloadOutlined } from '@mui/icons-material';

const UserRegister = () => {
  const { Title } = Typography;
  const router = useRouter();
  const onFinish = async (values) => {
    try {
      const response = await makeAuthorizedRequest("users", "POST", {
        username: values["username"],
        status: values["status"],
        subCenters: values["subCenters"],
        first_name: values["first_name"],
        father_name: values["father_name"],
        last_name: values["last_name"],
        email: values["email"],
        role: values["role"],
        password: values["password"],
        password_conformation: values["password_conformation"],
        phone_number: values["phone_number"],
        is_organization: values["is_organization"],
        region: values["region"],
        city: values["city"],
        sub_city: values["sub_city"],
        district: values["district"],
        kebele: values["kebele"],
        house_number: values["house_number"],
        front: values["front"],
        back: values["back"],
        type: values["type"],
        gender: values["gender"],
        centers: values["centers"],
      });

      if (response.ok) {
        // Store the token in local storage or a state management solution 
        router.push("/users/"); 
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
        <Title className="mb-15">User Registeration</Title>

        <Form
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  layout="vertical"
  className="row-col"
>
  <div className="space-x-2 grid grid-cols-3">
  <Form.Item
              className="username"
              label="User Name"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your User Name!",
                },
              ]}
            >
              <Input placeholder="User Name" />
            </Form.Item> 

<Form.Item
  className=" "
  label="Status"
  name="status"
  rules={[
    {
      required: true,
      message: "Please select the Status!",
    },
  ]}
>
  <Select placeholder="Select Status">
    <Select.Option value="1">1</Select.Option>
    <Select.Option value="0">0</Select.Option>
  </Select>
</Form.Item>
    <Form.Item
      className=""
      label="Sub Centers"
      name="subCenters"
      rules={[
        {
          required: true,
          message: "Please input the Sub Centers!",
        },
      ]}
    >
      <Input placeholder="Sub Centers" />
    </Form.Item>
    <Form.Item
      className=" "
      label="First Name"
      name="first_name"
      rules={[
        {
          required: true,
          message: "Please input your First Name!",
        },
      ]}
    >
      <Input placeholder="First Name" />
    </Form.Item>
    <Form.Item
      className=" "
      label="Father Name"
      name="father_name"
      rules={[
        {
          required: true,
          message: "Please input your Father Name!",
        },
      ]}
    >
      <Input placeholder="Father Name" />
    </Form.Item>
    <Form.Item
      className=" "
      label="Last Name"
      name="last_name"
      rules={[
        {
          required: true,
          message: "Please input your Last Name!",
        },
      ]}
    >
      <Input placeholder="Last Name" />
    </Form.Item>
    <Form.Item
      className=" "
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: "Please input your Email!",
        },
      ]}
    >
      <Input placeholder="Email" />
    </Form.Item>
    <Form.Item
      className=" "
      label="Role"
      name="role"
      rules={[
        {
          required: true,
          message: "Please input your Role!",
        },
      ]}
    >
      <Input placeholder="Role" />
    </Form.Item>
    <Form.Item
      className=" "
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your Password!",
        },
      ]}
    >
      <Input.Password placeholder="Password" />
    </Form.Item>
    <Form.Item
  className=" "
  label="Password Confirmation"
  name="password_confirmation"
  rules={[
    {
      required: true,
      message: "Please input your password confirmation!",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('The password confirmation does not match!'));
      },
    }),
  ]}
>
  <Input.Password placeholder="Password Confirmation" />
</Form.Item>
    <Form.Item
      className=" "
      label="Phone Number"
      name="phone_number"
      rules={[
        {
          required: true,
          message: "Please input your Phone Number!",
        },
      ]}
    >
      <Input placeholder="Phone Number" />
    </Form.Item>

    <Form.Item
      className=" "
      label="Is Organization"
      name="is_organization"
      rules={[
        {
          required: true,
          message: "Please input Organization!",
        },
      ]}
    >
      <Input placeholder="Is Organization" />
    </Form.Item>
    <Form.Item
      className=" "
      label="Region"
      name="region"
      rules={[
        {
          required: true,
          message: "Please input your Region!",
        },
      ]}
    >
      <Input placeholder="Region" />
    </Form.Item>
    <Form.Item
      className=" "
      label="City"
      name="city"
      rules={[
        {
          required: true,
          message: "Please input your City!",
        },
      ]}
    >
      <Input placeholder="City" />
    </Form.Item>
    <Form.Item
      className=" "
      label="Sub City"
      name="sub_city"
      rules={[
        {
          required: true,
          message: "Please input your Sub City!",
        },
      ]}
    >
      <Input placeholder="Sub City" />
    </Form.Item>
    <Form.Item
      className=" "
      label="District"
      name="district"
      rules={[
        {
          required: true,
          message: "Please input your District!",
        },
      ]}
    >
      <Input placeholder="District" />
    </Form.Item>
    <Form.Item
      className=" "
      label="Kebele"
      name="kebele"
      rules={[
        {
          required: true,
          message: "Please input your Kebele!",
        },
      ]}
    >
      <Input placeholder="Kebele" />
    </Form.Item>
    <Form.Item
      className=" "
      label="House Number"
      name="house_number"
      rules={[
        {
          required: true,
          message: "Please input your House Number!",
        },
      ]}
    >
      <Input placeholder="House Number" />
    </Form.Item>
    <Form.Item
      className=" "
      label="Front"
      name="front"
      rules={[
        {
          required: true,
          message: "Please input Front!",
        },
      ]}
    >
      <Input placeholder="Front" />
    </Form.Item>
    <Form.Item
      className=" "
      label="Back"
      name="back"
      rules={[
        {
          required: true,
          message: "Please input Back!",
        },
      ]}
    >
      <Input placeholder="Back" />
    </Form.Item>
    <Form.Item
      className=" "
      label="Type"
      name="type"
      rules={[
        {
          required: true,
          message: "Please input your Type!",
        },
      ]}
    >
      <Input placeholder="Type" />
    </Form.Item>
    <Form.Item
  className=" "
  label="Gender"
  name="gender"
  rules={[
    {
      required: true,
      message: "Please select your Gender!",
    },
  ]}
>
  <Select placeholder="Select Gender">
    <Select.Option value="Male">Male</Select.Option>
    <Select.Option value="Female">Female</Select.Option>
  </Select>
</Form.Item>
    <Form.Item
      className=" "
      label="Centers"
      name="centers"
      rules={[
        {
          required: true,
          message: "Please input Centers!",
        },
      ]}
    >
      <Input placeholder="Centers" />
    </Form.Item>

  </div>
  <div className="flex space-x-3 justify-end">
    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        style={{ marginTop:10, width: "100%", backgroundColor: "blue" }}
      >
       Register
      </Button>
    </Form.Item>
    <Form.Item>
    <Button onClick={()=>router.push('/users/')}
                type="primary"
              
                style={{ marginTop:10, width: "100%", backgroundColor: "blue" }}
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

export default UserRegister;
