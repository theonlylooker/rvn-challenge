import Content from "./components/Content";
import Modal from "./components/modal/Modal";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App bg-rvnBG">
      <div className="h-screen p-8 flex gap-8">
        <SideBar />
        <Content />
        {/* <Modal /> */}
      </div>
    </div>
  );
}

export default App;
