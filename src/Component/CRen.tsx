function CRen() {
  const name = [""];
  if (name.length > 0)
    return (
      <>
        <h6 className="bg-danger">Conditional Rendering</h6>
        <p className="text-danger">Rendering Successfully</p>
      </>
    );
  else return <>{<p>Can't able to Render</p>}</>;
}
export default CRen;
