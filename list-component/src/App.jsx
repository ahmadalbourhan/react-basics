import "./App.css";
import { desserts } from "./assets/desserts";
import DessertsList from "./components/DessertsList";
import MapList from "./components/MapList";

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <br />
      <hr />
      <MapList />
    </div>
  );
}

export default App;
