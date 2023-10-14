import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dataex from "./Components/Data";
function App() {
  const appstyle = { width: "100%", minHeight: "100vh", minWidth: "100vw" };
  const dataexStyle = { width: "100%", height: "100%" };
  return (
    <div style={appstyle} className="background d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center text-light fw-bold">Dummy data</h1>
      <div style={dataexStyle}>
        <Dataex />
      </div>
    </div>
  );
}

export default App;