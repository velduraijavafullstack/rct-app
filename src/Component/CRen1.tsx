function CRen1() {
  const numbers = [101, 102, 103, 104, 105];
  // let arts = ["nature", "human", "imaginary", "cartoon"];
  // let arts = [];

  return (
    <div>
      <h2>IDS</h2>
      <ul className="list-group">
        {numbers.map((number) => (
          <li className="list-group-item" key={number}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CRen1;
