import ListGroup1 from "./Component/ListGroup1";
import ListGroup from "./Component/ListGroup";
import CRen from "./Component/CRen";
import CRen1 from "./Component/CRen1";
import Ternary from "./Component/ternary";
import Event from "./Component/event";
import Mstates from "./Component/states";
import LGprops from "./Component/LGprops";
import Rafce from "./Component/Rafce";
import Alert from "./Component/Alert";
import Button from "./Component/Button";

function App() {
  return (
    <div>
      <Alert>Hellow All</Alert>
      <Button
        children={"But"}
        color={"btn btn-primary"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {/* </Alert> */}
      <ListGroup />
      <ListGroup1 />
      <CRen />
      <CRen1 />
      <Ternary />
      <Event />
      <Mstates />
      <LGprops />
      <Rafce />
    </div>
  );
}
export default App;
