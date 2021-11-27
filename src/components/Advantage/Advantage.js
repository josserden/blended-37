import { v4 as uuidv4 } from "uuid";

export default function Advantage({ array }) {
  return (
    <ul>
      {array.map(({ title, description }) => (
        <li key={uuidv4()}>
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
      ))}
    </ul>
    // render() {},
  );
}
