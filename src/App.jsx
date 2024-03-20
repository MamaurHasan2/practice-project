import DaisyNav from "./assets/Components/DaisyNav/DaisyNav";
import Navbar from "./assets/Components/Navbar/Navbar";
import PriceOptions from "./assets/Components/PriceOptions/PriceOptions";
import Recharts from "./assets/Components/Recharts/Recharts";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-600 font-bold">Vite + React</h1>

      <PriceOptions></PriceOptions>
      <Recharts></Recharts>
    </>
  );
}

export default App;
