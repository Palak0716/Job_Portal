import React from 'react';
import { Button, Divider, Form, Input, Typography, message,} from 'antd';
// import {FacebookFilled, TwitterOutlined, GoogleOutlined, InstagramFilled} from '@ant-design/icons'
import "../styles/Login.css";

const Login = () => {

   const signUP = () => {

   };

   const forgetPassword= () =>{

   };
  
   const login = () =>{
      message.success('Login Successful !');
   };

   return (
    <div className="appBg">
      <Form className='loginForm' onFinish={login}>
         <Typography.Title>Login Page</Typography.Title>
         <Form.Item rules={[
            {
               required: true,
               type: "email",
               message: "Please enter valid email",
            },
         ]} label='Email' name={'Email'}>
            <Input placeholder='Enter Your email'/>
         </Form.Item>
         <Form.Item rules={[
            {
               required: true,
               message: "Please enter valid Password",
            },
         ]} label='Password' name={'pswd'}>
            <Input.Password placeholder='Enter Your password'/>
         </Form.Item>
         <text>Forget Password ?</text>
         <Button type='link' style={{margin:"10px"}} onClick={forgetPassword}>Click Here</Button>
         <Button type='primary' htmlType='submit' block>Login</Button>
         {/*<Divider style={{borderColor: "black"}}>or Login with</Divider>
         <div className='socialLogin'>
            <GoogleOutlined className='socialIcon' onClick={login} style={{color: "red"}}/>
            <FacebookFilled className='socialIcon' onClick={login} style={{color: "blue"}}/>
            <TwitterOutlined className='socialIcon' onClick={login} style={{color: "cyan"}}/>
            <InstagramFilled className='socialIcon' onClick={login} style={{color: "green"}}/>
      </div>*/}
         <Divider style={{borderColor: "black"}}></Divider>
         <div>
            <text>New User ? Register here</text>
            <Button type="default" style={{margin:"10px", background:"cyan"}} onClick={signUP}>SignUp</Button>
         </div>
      </Form>
    </div>
  )
}

export default Login