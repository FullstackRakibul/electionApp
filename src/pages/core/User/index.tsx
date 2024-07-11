import {Col, Row, Button, Form, Input, Select } from 'antd';
import { electionHttpJson } from '../../../config/http';

const UserManagement = () => {
  const [userTypeCreateForm] = Form.useForm();

  
  const onFinish = (values: any) => {
      console.log(values);
      const apiInsatance = electionHttpJson();
      const response = apiInsatance.post("/account/usertype_list/",values);
      console.log(response);
  };
  const onReset = () => {
    userTypeCreateForm.resetFields();
  };
    const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <>
         <section className="flex flex-row justify-center w-full px-4 mx-auto sm:px-6 lg:px-8">
          <Row gutter={16} className="w-full">
            <Col xs={24} md={16} lg={12} xl={8}>
              <Form
                form={userTypeCreateForm}
                name="user-type-manage"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit" className="mr-2">
                    Submit
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    Reset
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </section>
      </>
  );
}

export default UserManagement