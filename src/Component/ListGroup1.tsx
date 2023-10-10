function ListGroup1() {
  const names = ["Vel", "raja", "manik", "PMMRV"];
  // const cities = ["Chennai", "Tirunelveli", "Madurai", "kovai"];
  // cities = [];
  // if (cities.length === 0)
  // return (
  //   <>
  //     <h1>List</h1>
  //     <p>no item found</p>
  //   </>
  // );
  return (
    <>
      <h1>Names</h1>
      <ul className="list-group">
        {names.map((name) => (
          //Key uniq identifier
          <li className="list-group-item" key={name}>
            {name}
          </li>
        ))}

        {/* <li>List One</li>
        <li>List Two</li>
        <li>List Three</li>
        <li>List Four</li>
        <li>List Five</li> */}
        {/* </ul>
      <ul className="list-group">
        <h1>Cities</h1>
        {cities.map((city) => (
          <li className="list-group-item">{city}</li>
        ))}
      </ul> */}
      </ul>
    </>
  );
}
export default ListGroup1;
