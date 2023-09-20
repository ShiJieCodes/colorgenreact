import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colorList }) => {
  return (
    <section className="colors">
      {colorList.map((color, index) => {
        return <SingleColor key={nanoid()} oneColor={color} index={index} />;
      })}
    </section>
  );
};
export default ColorList;
