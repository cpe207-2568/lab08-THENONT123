import {Header} from "./components/Header"
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { TaskInput } from "./components/TaskInput";
import { Task } from "./components/Task";
import type { TaskCardProps } from "./libs/types";


function App() {
  const Taskcard:TaskCardProps[] = [
    {id:1,title:"Read a Book",description:"Vite + React + Bootstrap + TS",isDone:true},
    {id:2,title:"Write code",description:"finish project for class",isDone:true},
    {id:3,title:"Deploy app",description:"push project to Github pages",isDone:true},
  ]
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Nontapat" type="admin"></Sidebar>
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <div className="col-12 m-2 p-0"></div>
            {/* input ด้านบน*/}
            <TaskInput></TaskInput>
            {/* Card รายการ */}
            
            <Task {...Taskcard[0]}></Task>
            <Task {...Taskcard[1]}></Task>
            <Task {...Taskcard[2]}></Task>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2025" fullName = "Nontapat Chaiya" studentId = "670610710"></Footer>
    </div>
  );
}

export default App;
