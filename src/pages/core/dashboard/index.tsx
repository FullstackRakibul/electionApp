import { Row,Col ,Card, Image} from "antd"
import demoImage from "../../../assets/demoImage.png"
import ElectionSummary from "../../../components/electionSummary"

const CoreDashboardPage = () => {
  return (
    <>
    <Row
      gutter={16}
      justify="center"
      style={{marginTop:"16px"}}
    >
      <Col 
        span={10}
      >
      <Card
        title="Candidate Info"
        
      >
        <Card.Meta
          
          avatar={
          <Image 
          src={demoImage}
          height={150}
          width={150}
          style={{borderRadius:"50%"}}
          />
        }
        description={<>
          <h5>@Batman</h5>
          <h2>Batman</h2>
        </>}
        >

        </Card.Meta>
      </Card>
      </Col>
      <Col
        span={10}
      >
      <Card
        title="Identify As"
      >
        <Card.Meta
          avatar={
          <Image 
          src={demoImage}
          height={150}
          width={150}
          style={{borderRadius:"50%"}}
          />
        }
        description={<>
          <h5>@Bat</h5>
          <h2>Gotham City</h2>
        </>}
        >

        </Card.Meta>
      </Card>
      </Col>
    </Row>
    <ElectionSummary/>
    </>
  )
}

export default CoreDashboardPage
