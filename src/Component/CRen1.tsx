function CRen1() {
  const numbers = [101, 102, 103, 104, 105];
  // let arts = ["nature", "human", "imaginary", "cartoon"];
  // let arts = [];

  return (
    <>
      <h2>IDS</h2>
      <ul className="list-group">
        {numbers.map((number) => (
          <li className="list-group-item">{number}</li>
        ))}
      </ul>
    </>
  );
}
export default CRen1;
