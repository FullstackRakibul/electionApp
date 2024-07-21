import { Card, Col, Row, Table, Tabs } from 'antd'
import React from 'react'
import electionData from '../../interface/electionData'
import { ColumnsType } from 'antd/lib/table';


const ElectionSummary = () => {
  const columns:ColumnsType<electionData> =[
    {
      title: 'Certer Name',
      dataIndex: 'centerName',
      key: 'centerName',
    },
    {
       title: 'Local Count',
      dataIndex: 'localCount',
      key: 'localCount',
    }

  ]
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
            title="Election Summary ( Temp )"
            style={{textAlign:"center"}}
          >
            <Table
              showHeader
              rowHoverable
              scroll={{y:300}}
              columns={columns}
              
            >

            </Table>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ElectionSummary