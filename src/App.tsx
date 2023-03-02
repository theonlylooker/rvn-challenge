import Content from "./components/Content";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App bg-rvnBG h-screen p-8 flex gap-8">
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
