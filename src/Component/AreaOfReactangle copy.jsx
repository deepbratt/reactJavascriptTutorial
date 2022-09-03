import { areaRect } from "../Utility/general";
const AreaOfReactangle = () => {
  const length = 7;
  const width = 6;
  const area = areaRect(length, width);
  return (
    <div>
      Area of reactangle length: <b>{length}</b> and width: <b>{width}</b> so
      area = <b>{area}</b>
    </div>
  );
};

export default AreaOfReactangle;

//first brace = ()  ex: function
//second brace = {} ex: object
//thir brace = []    ex: array
