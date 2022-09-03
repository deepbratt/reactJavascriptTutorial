import AreaDynamic from "./Component/AreaDynamic";
import {
  default as AreaOfCircle,
  default as AreaOfReactangle,
} from "./Component/AreaOfCircle";
function App() {
  return (
    <div className="App">
      <AreaOfReactangle />
      <AreaDynamic />
      <AreaOfCircle />
    </div>
  );
}
export default App;
