function ListGroup1() {
  const names = ["Vel", "raja", "manik"];
  return (
    <div>
      <h1>Names</h1>
      <ul className="list-group">
        {names.map((name) => (
          <li className="list-group-item">{name}</li>
        ))}
        {/* <li>List One</li>
        <li>List Two</li>
        <li>List Three</li>
        <li>List Four</li>
        <li>List Five</li> */}
      </ul>
    </div>
  );
}
export default ListGroup1;
