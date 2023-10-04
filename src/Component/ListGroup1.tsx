function ListGroup1() {
  const names = ["Vel", "raja", "manik", "PMMRV"];
  return (
    <>
      <h1>Names</h1>
      <ul className="list-group">
        {names.map((name) => (
          <li className="list-group-item" key={name}>
            {name}
          </li>
        ))}
        {/* <li>List One</li>
        <li>List Two</li>
        <li>List Three</li>
        <li>List Four</li>
        <li>List Five</li> */}
      </ul>
    </>
  );
}
export default ListGroup1;
