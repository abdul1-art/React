import Hero from "./components/Hero";
import Kepala from "./components/Navbar";
import { Footer, Detail } from "./components/Footer";
import Card from "./components/Card";
// custom nama
// custom nama, import kepala
function App() {
  return (
    <div>
      <Kepala />
      <Hero />
      <Card/>
      <footer />
      <Detail />
    </div>
  );
}

export default App;
