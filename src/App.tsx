import Search from "./components/Search/Search"
import Map from "./components/Map/Map";
import {ContextProvider} from "./context/app.context";
import "./App.css";

function App() {
  return (
    <ContextProvider>
        <div className="App">
            <Search/>
            <Map/>
        </div>
    </ContextProvider>
  )
}

export default App