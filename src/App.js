import { BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import TodoList from "./labs/a6/todo/todo-list";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          {/* /* makes all routes in the component are handled */}
          <Route path="/*" element={<Labs/>}/>
          <Route path='/hello' element={<HelloWorld/>}/>
          <Route path='/tuiter/*' element={<Tuiter/>}/>
          <Route path='/todo' element={<TodoList/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
