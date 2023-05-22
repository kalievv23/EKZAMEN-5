import "./App.css";
import CreateShopp from "./components/CreateShopp";
import { ContextProvider } from "./components/store/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <CreateShopp />
      </ContextProvider>
    </div>
  );
}

export default App;
