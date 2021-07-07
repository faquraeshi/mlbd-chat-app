import ROUTES from "./routes/Routes";
import { RenderRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      {console.log(ROUTES)}
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
