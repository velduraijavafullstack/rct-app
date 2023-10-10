function Event() {
  const names = ["scuril", "Anil", "Kirmada", "Aap"];
  return (
    <div>
      <h1>Nick Name</h1>
      <ul>
        {names.map((name, index) => (
          // <li key={name} onClick={() => console.log(name, index)}>
          <li key={name} onClick={(event) => console.log(event)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Event;
