import React from 'react';
import '../styles/SignUp.css';
import { Divider, Form, Input, Typography, Button,} from 'antd';
import { FacebookFilled, GoogleOutlined, InstagramFilled, TwitterOutlined } from '@ant-design/icons';

const SignUp = () => {
  return (
   <div className="signUpBg">
   <Form className='signUpForm' >
      <Typography.Title>SignUp Page</Typography.Title>
      <Form.Item rules={[
         {
            required: true,
            type: "text",
            message: "Please enter your name",
         },
      ]} label='User Name' name={'userName'} >
         <Input placeholder='Enter Your Name' id='userName'/>
      </Form.Item>

      <Form.Item rules={[
         {
            required: true,
            type: "email",
            message: "Please enter your Email",
         },
      ]} label='Email' name={'userEmail'} >
         <Input placeholder='Enter Your Email' id='userEmail' />
      </Form.Item>

      <Form.Item rules={[
         {
            required: true,
            type: "string",
            message: "Please enter Mobile",
         },
      ]} label='Mobile No.' name={'userMobile'} >
         <Input placeholder='Enter Your Mobile Number' id='userMobile'/>
      </Form.Item>
      <Form.Item rules={[
         {
            required: true,
            message: "Please enter your Password",
         },
      ]} label='Password' name={'pswd'} >
         <Input.Password placeholder='Enter Your password' id='userPassword'/>
      </Form.Item>
      <Form.Item rules={[
         {
            required: true,
            message: "Please enter valid Password",
         },
      ]} label='Confirm Password' name={'rPswd'} >
         <Input.Password placeholder='Re-Enter Your Password' id='rPassword'/>
      </Form.Item>
      <Button type='primary' htmlType='submit' block>signUP</Button>
      <Divider style={{borderColor: "black"}}>or SignUp with</Divider>
      <div className='socialLogin'>
         <GoogleOutlined className='socialIcon'  style={{color: "red"}}/>
         <FacebookFilled className='socialIcon'  style={{color: "blue"}}/>
         <TwitterOutlined className='socialIcon'  style={{color: "cyan"}}/>
         <InstagramFilled className='socialIcon'  style={{color: "purple"}}/>
   </div>
   </Form>
 </div>
  )
}

export default SignUp