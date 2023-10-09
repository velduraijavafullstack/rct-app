function Ternary() {
  const arrays = [];

  return (
    <>
      <h3>Ternary</h3>
      {arrays.length === 0 ? <p>Array is empty</p> : null}
      {arrays.length === 0 && <p>Array is not empty</p>}
      <ul className="list-group">
        {arrays.map((val) => (
          <p>{val}</p>
        ))}
      </ul>
    </>
  );
}
export default Ternary;
