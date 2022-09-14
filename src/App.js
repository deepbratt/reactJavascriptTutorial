import { Container } from "react-bootstrap";
import "./app.css";
import AreaDynamic from "./Component/AreaDynamic";
import AreaOfCircle from "./Component/AreaOfCircle";
import AreaOfReactangle from "./Component/AreaOfReactangle";
import Deep from "./Component/Deep";
import Grid from "./Component/Grid";
import Header from "./Component/Header";
function App() {
  // let person = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   age: 50,
  //   eyeColor: "blue",
  // };
  // addTwoNumber(person);
  return (
    <div className="amarContainer">
      <Header />
      <Container>
        <Deep firstName="John" lastName="Doe" age={50} eyeColor="blue" />
        <Grid />
        <AreaOfReactangle />
        <AreaDynamic />
        <AreaOfCircle />
      </Container>
    </div>
  );
}
export default App;

// function addTwoNumber(props) {
//   console.log(props);
//   return false;
// }
