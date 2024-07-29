import { Card, Col, Row ,Form, Input, Button, Upload} from "antd"
import {
  PlusOutlined,
} from "@ant-design/icons";


const FirstAppriser = () => {
  return (
    <>
      <Row 
      gutter={16}
      justify="center"
      style={{marginTop:"16px"}}
      >
        <Col
          span={20}
        >
          <Card
            title="Local Counting"
          >
            <Form
              title="Enter Your Local Count"
            >
              <Form.Item
                name="countTypeOne"
                label="Enter Number"
                
              >
                <Input placeholder="Enter Your Count ..." />
              </Form.Item>
              <Form.Item
                name="uploadLocalProf"
                label="Upload Prof Document"
              >
                <Upload
                  beforeUpload={()=>false}
                  listType="picture-card"
                  showUploadList
                  
                >
                  <Button
                    icon={ <PlusOutlined />}
                    style={{
                      border:"0",
                      background:"none", 
                      boxShadow:"none",
                      
                    }}
                  >
                    Upload File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item>
                <Button 
                  type="primary"
                  htmlType="submit"
                >
                  Submit Local Count
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default FirstAppriser