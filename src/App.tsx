import Content from "./components/Content";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App h-full bg-rvnBG">
      <div className="h-screen p-8 flex gap-8">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
