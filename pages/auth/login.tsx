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
import signinbg from "../../public/download_.jpeg";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
  DownloadOutlined
} from "@ant-design/icons";
import { makeAuthorizedRequest } from '../../utils/api';
// import { DownloadOutlined } from '@mui/icons-material';

const Login = () => {
  const { Title } = Typography; 
const router = useRouter();
  const onFinish = async (values) => { 
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
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
          localStorage.setItem('me', JSON.stringify(response));

          const {type}=response.data;
          if (type === 'admin'){
            router.push('/dashboard');
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
     <GustLayout>
     {/* <Content className="signin"> */}
            <Row gutter={[24, 0]} justify="space-around">
              <Col
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 6, offset: 2 }}
                md={{ span: 12 }}
              >
                <Title className="mb-15">Sign In</Title>
                <Title className="font-regular text-muted" level={5}>
                  Enter your username and password to sign in
                </Title>
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
                      style={{ width: "100%", backgroundColor: "blue"}}  >
                      SIGN IN
                    </Button>
                  </Form.Item> 
                  
                </Form>
              </Col>
              <Col
                className="sign-img"
                style={{ padding: 12 }}
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 12 }}
              > 
                 <Image width={400} src= {signinbg } alt="" /> 
              </Col>
            </Row> 
  
    </GustLayout>

    </>
  );
};

  export default Login;
 