import { Container } from "react-bootstrap";
import "./app.css";
import AreaDynamic from "./Component/AreaDynamic";
import AreaOfCircle from "./Component/AreaOfCircle";
import AreaOfReactangle from "./Component/AreaOfReactangle";
import Grid from "./Component/Grid";
import Header from "./Component/Header";
function App() {
  return (
    <div className="amarContainer">
      <Header />
      <Container>
        {/* <Row>
          <Col></Col>
          <Col>2 of 2</Col>
        </Row>

        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row> */}
        <Grid />
        <AreaOfReactangle />
        <AreaDynamic />
        <AreaOfCircle />
      </Container>
    </div>
  );
}
export default App;
