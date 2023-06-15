// pages/products/[id]/update.js

import React from 'react';
import { useRouter } from 'next/router';

const update = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the existing product details based on the id and populate the form fields

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the product details based on the form submission
  };

  return (
    <div>
      <h1>Update Product</h1>
      <p>Product ID: {id}</p>
      <form onSubmit={handleSubmit}>
        {/* Form fields for updating the product */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default update;
   
// import Image from "next/image";
// import GustLayout from "../../layout/gustLayout";
// import {
//   Layout,
//   Button,
//   Row,
//   Col,
//   Typography,
//   Form,
//   Input,
//   Switch,
// } from "antd";
// import signinbg from "../../public/download_.jpeg";
// import {
//   DribbbleOutlined,
//   TwitterOutlined,
//   InstagramOutlined,
//   GithubOutlined,
//   DownloadOutlined,
// } from "@ant-design/icons";
// import { makeAuthorizedRequest } from "../../../utils/api";
// import Layouts from "../../../components/Layout"; 
// // import { DownloadOutlined } from '@mui/icons-material';

// const StudentRegister = () => {
//   const { Title } = Typography;
//   const router = useRouter();
//   const onFinish = async (values) => {
//     try {
//       const response = await makeAuthorizedRequest("student", "POST", {
//         username: values["username"],
//         password: values["password"],
//         first_name: values["first_name"],
//         middle_name: values["middle_name"],
//         last_name: values["last_name"],
//         gender: values["gender"],
//         phone_number: values["phone_number"],
//         date_of_birth: values["date_of_birth"],
//         country_of_residence: values["country_of_residence"],
//         region: values["region"],
//         zone: values["zone"],
//         city: values["city"],
//         email: values["email"],
//         current_religion: values["current_religion"],
//         name_of_Chirstianity: values["name_of_Chirstianity"],
//         name_of_Chirstianity_fn: values["name_of_Chirstianity_fn"],
//         name_of_cherch_member: values["name_of_cherch_member"],
//         service_sub_center: values["service_sub_center"],
//         your_services: values["your_services"],
//         other_service: values["other_service"],
//         main_centers_id: values["main_centers_id"],
//         sub_centers_id: values["sub_centers_id"],
//         curricula_id: values["curricula_id"],
//         age: values["age"],
//         lernning_mode: values["lernning_mode"],
//       });
//       if (response.ok) {
//         // Store the token in local storage or a state management solution
//         // console.log('Bearer token:', token);
//         router.push("/Student");
//       } else {
//         console.error("Login failed");
//       }
//     } catch (error) {
//       console.error("An error occurred", error);
//     }
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <>
//       <Layouts> 
//         <Title className="mb-15">Student Update</Title>
//         {/* <Title className="font-regular text-muted" level={5}>
//                   Enter your username and password to sign in
//                 </Title> */}

//         <Form
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           layout="vertical"
//           className="row-col "
//         >
//           <div className="space-x-2 grid grid-cols-3">
//             <Form.Item
//               className="username"
//               label="User Name"
//               name="username"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your User Name!",
//                 },
//               ]}
//             >
//               <Input placeholder="User Name" />
//             </Form.Item> 
//             <Form.Item
//               className="username"
//               label="Password"
//               name="password"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your password!",
//                 },
//               ]}
//             >
//               <Input placeholder="Password" />
//             </Form.Item>
//             <Form.Item
//               className=" "
//               label="First Name"
//               name="first_name"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your First Name!",
//                 },
//               ]}
//             >
//               <Input placeholder="first_name" />
//             </Form.Item>
//             <Form.Item
//               className=" "
//               label="Middle Name"
//               name="middle_name"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your Middle Name!",
//                 },
//               ]}
//             >
//               <Input placeholder="Middle Name" />
//             </Form.Item>
//             <Form.Item
//               className=" "
//               label="Last Name"
//               name="last_name"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your Last Name!",
//                 },
//               ]}
//             >
//               <Input placeholder="Last Name" />
//             </Form.Item> 
//             <Form.Item
//               className=" "
//               label="Gender"
//               name="gender"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your Gender!",
//                 },
//               ]}
//             >
//               <Input placeholder="Gender" />
//             </Form.Item> 
//             <Form.Item
//               className=" "
//               label="phone_number"
//               name="phone_number"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your phone_number!",
//                 },
//               ]}
//             >
//               <Input placeholder="phone_number" />
//             </Form.Item>
//             <Form.Item
//               className=" "
//               label="date_of_birth"
//               name="date_of_birth"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your date_of_birth!",
//                 },
//               ]}
//             >
//               <Input placeholder="date_of_birth" />
//             </Form.Item>
//             <Form.Item
//               className=" "
//               label="city"
//               name="city"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your city!",
//                 },
//               ]}
//             >
//               <Input placeholder="city" />
//             </Form.Item>
//             <Form.Item
//               className=" "
//               label="email"
//               name="email"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your email!",
//                 },
//               ]}
//             >
//               <Input placeholder="email" />
//             </Form.Item>
//             <Form.Item
//               className=" "
//               label="email"
//               name="email"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your email!",
//                 },
//               ]}
//             >
//               <Input placeholder="email" />
//             </Form.Item>
//             <Form.Item
//               className=" "
//               label="service_sub_center"
//               name="service_sub_center"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your service_sub_center!",
//                 },
//               ]}
//             >
//               <Input placeholder="service_sub_center" />
//             </Form.Item> 
//             <Form.Item
//               className=" "
//               label="your_services"
//               name="your_services"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your your_services!",
//                 },
//               ]}
//             >
//               <Input placeholder="your_services" />
//             </Form.Item> 
//             <Form.Item
//               className=" "
//               label="other_service"
//               name="other_service"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your other_service!",
//                 },
//               ]}
//             >
//               <Input placeholder="other_service" />
//             </Form.Item> 
//             <Form.Item
//               className=" "
//               label="main_centers_id"
//               name="main_centers_id"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your main_centers_id!",
//                 },
//               ]}
//             >
//               <Input placeholder="main_centers_id" />
//             </Form.Item> 
//             <Form.Item
//               className=" "
//               label="age"
//               name="age"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your age!",
//                 },
//               ]}
//             >
//               <Input placeholder="age" />
//             </Form.Item> 
//             <Form.Item
//               className=" "
//               label="sub_centers_id"
//               name="sub_centers_id"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your sub_centers_id!",
//                 },
//               ]}
//             >
//               <Input placeholder="sub_centers_id" />
//             </Form.Item>
//             <Form.Item
//               className=" "
//               label="lernning_mode"
//               name="lernning_mode"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your lernning_mode!",
//                 },
//               ]}
//             >
//               <Input placeholder="lernning_mode" />
//             </Form.Item>
//             <Form.Item
//               className=" "
//               label="country_of_residence"
//               name="country_of_residence"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your country_of_residence!",
//                 },
//               ]}
//             >
//               <Input placeholder="country_of_residence" />
//             </Form.Item> 
//             <Form.Item
//               className=" "
//               label="curricula_id"
//               name="curricula_id"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your curricula_id!",
//                 },
//               ]}
//             >
//               <Input placeholder="curricula_id" />
//             </Form.Item>
//           </div>
//           <div className="flex space-x-3 justify-end">
//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 style={{ width: "100%", backgroundColor: "blue" }}
//               >
//                 Student Update
//               </Button>
//             </Form.Item>
//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 style={{ width: "100%", backgroundColor: "blue" }}
//               >
//                 Close
//               </Button>
//             </Form.Item>
//           </div>
//         </Form>
//         {/* </Col>  */}
//         {/* </Row>  */}
//       </Layouts>
//     </>
//   );
// };
 
