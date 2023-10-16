function LGprops() {
  const cities = [
    "Chennai",
    "Banglore",
    "Tirunelveli",
    "krishnagiri",
    "Selam",
    "Madurai",
  ];
  return (
    <div>
      <h1>Cities</h1>
      <ul>
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  );
}
export default LGprops;
