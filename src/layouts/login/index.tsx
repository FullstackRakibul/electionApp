import { Card ,Avatar, Row, Col ,  Button, Checkbox, Form, Input  } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import type { FormProps } from 'antd';


type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};


const Login = () => {
   const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', '123456');
    navigate('/core/dashboard');
  };


  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
  };

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
  };


  return (
    <>
      <Row gutter={16}>
        <Col span={24}>
            <Card>
              <Meta 
              title="Enter your login credentials"
              avatar={<Avatar src="https://www.creativefabrica.com/wp-content/uploads/2021/08/02/User-Login-Icon-Graphics-15383923-1-1-580x374.jpg" />}
              >
              </Meta>
                 <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 800 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item<FieldType>
                      label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{ offset: 8, span: 16 }}
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Login