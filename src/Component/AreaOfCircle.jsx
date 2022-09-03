import {areaCircle} from '../Utility/general'
const AreaOfCircle = () => {
  const radius = 7;
  const area = areaCircle(radius);
  return (
    <div>
      Area of Circle Raidus: <b>{radius}</b> so area = <b>{area}</b>
    </div>
  );
};

export default AreaOfCircle;
