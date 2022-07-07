import "./App.css";
import AddNewTaskModal from "./components/AddNewTaskModal";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <Navbar />
      <AddNewTaskModal />
      <Todo />
    </div>
  );
}

export default App;
