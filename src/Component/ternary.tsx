function Ternary() {
  // const obj = {
  //   val: ["val1", "val2", "val3"],
  // };

  const arrays = ["val1", "val2", "val3"];

  return (
    <>
      <h3>Ternary</h3>
      {/* {arrays.length === 0 ? <p>Array is empty</p> : null} */}
      {arrays.length === 0 && <p>Array is not empty</p>}
      <ul className="list-group">
        {arrays.map((array) => (
          <li
            className="list-group-item"
            key={array}
            onClick={() => console.log("clicked")}
          >
            {array}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Ternary;
