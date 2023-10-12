import { MouseEvent } from "react";
//  Event Handler
function Event() {
  const names = ["scuril", "Anil", "Kirmada", "Aapa"];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <div>
      <h1>Nick Name</h1>
      <ul>
        {names.map((name) => (
          // <li key={name} onClick={() => console.log(name, index)}>
          // <li key={name} onClick={(event) => console.log(event)}>
          <li key={name} onClick={handleClick}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Event;
