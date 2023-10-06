function CRen() {
  const name = ["Naveen"];
  if (name.length > 0)
    return (
      <>
        <h6 className="bg-danger">Conditional Rendering</h6>
        <p className="bg-mark">Naveen bro Eligible for marraige</p>
      </>
    );
  else return <>{<p>No marriage for naveem</p>}</>;
}
export default CRen;
