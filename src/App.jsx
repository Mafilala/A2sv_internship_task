import "./App.css";
import { data } from "../src/assets/data";
import Card from "./components/card/card";

function App() {
  return (
    <div className="flex flex-col justify-center items-center border h-auto gap-4">
      {data.map((cardInfo) => (
        <Card key={cardInfo.description} cardInfo={cardInfo} />
      ))}
    </div>
  );
}

export default App;
