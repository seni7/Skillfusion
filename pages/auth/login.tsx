import { useState, FormEvent } from 'react';
import React, { Component } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import GustLayout  from '../layout/gustLayout'
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
import signinbg from "../../public/Welcome.svg";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
  DownloadOutlined
} from "@ant-design/icons";
import { makeAuthorizedRequest } from '../../utils/api';
import illu from '../../public/loginill.jpg'
// import { DownloadOutlined } from '@mui/icons-material';

const Login = () => {
  const { Title } = Typography; 
const router = useRouter();
  const onFinish = async (values) => { 
    try {
      const response = await fetch('http://192.168.137.91:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username:values['username'], password:values['password'] }),
      });

      if (response.ok) {
        const { token } = await response.json();
        // Store the token in local storage or a state management solution
        // console.log('Bearer token:', token);
        localStorage.setItem('skillAuth', token);
        makeAuthorizedRequest('me').then((response) => {
          localStorage.setItem('me', JSON.stringify(response.data));

          const {type}=response.data;
          if (type === 'admin'){
            router.push('/DashboardPage');
          }else if(type === 'student'){
            router.push('/student');
          } 
        })
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  

  return (
    <>
     <GustLayout >
      {/* <div>
       

      </div> */}
     {/* <Content className="signin"> */}
     <div className="flex items-center justify-center pt-36 ">
      <div className="bg-[#ffffff] border-8 border-zinc-400 rounded-2xl">
        <div className="text-2xl font-bold text-white m-4">
        <Row gutter={[24, 0]} justify="space-around" >
        <Col
                className="sign-img"
                style={{ padding: 12 }}
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 12 }}
              > 
              
                 <Image width={400} src= {illu } alt="" className=' sm:block hidden md:block w-auto '/> 
              </Col>
              <Col className='pt-24 '
                xs={{ span: 20, offset: 0 }}
                lg={{ span: 10, offset: 2 }}
                md={{ span: 12 }}
              >
                
                <Title>Sign In</Title>
                {/* <Title className="font-regular text-muted" level={5}>
                  Enter your username and password to sign in
                </Title> */}
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
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
                    className="username"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input placeholder="Password" />
                  </Form.Item>
 
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                       className='bg-blue-500  text-white font-bold  border-b-4 border-blue-700 hover:border-blue-500 rounded-'>
                      SIGN IN
                    </Button>
                  </Form.Item> 
                  
                </Form>
              </Col>
              
              
            </Row>
        </div>
        
      </div>
    </div>
  
    </GustLayout>

    </>
  );
};

  export default Login;
 