function Ternary() {
  const arrays = obj.val;

  return (
    <>
      <h3>Ternary</h3>
      {/* {arrays.length === 0 ? <p>Array is empty</p> : null} */}
      {arrays.length === 0 && <p>Array is not empty</p>}
      <ul className="list-group">
        {arrays.map((array) => (
          <li className="list-group-item">{array}</li>
        ))}
      </ul>
    </>
  );
}
export default Ternary;
const obj = {
  val: ["val1", "val2", "val3"],
};
