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
        <p className={"copy"}>Created by Alexander Ortiz <a href="https://aortiz.netlify.app">visit me here</a></p>
    </ContextProvider>
  )
}

export default App