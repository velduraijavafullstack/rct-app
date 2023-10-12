import { useState } from "react";

function Mstates() {
  const state = ["TamilNadu", "Karnataka", "Kerala", "Anthra"];
  // const selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h2>Managing State</h2>
      <ul className="list-group">
        {state.map((state, firstIndex) => (
          <li
            className={
              selectedIndex === firstIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={state}
            onClick={() => {
              setSelectedIndex(firstIndex);
            }}
          >
            {state}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Mstates;
