import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import TopMenu from "./components/topbar";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />
      <div className="h-[calc(100vh-6rem)] flex overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <div className="sticky top-0 z-10 bg-[#0f0f0f] border-b border-[#303030]">
            <TopMenu />
          </div>
          <Hero />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
