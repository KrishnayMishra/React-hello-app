import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello"
import Greeting from './components/Greet';
import Parent from './components/Parent';
import Event from './components/Event';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import Login from './components/Login';
import Routers from './components/Routers';
function App() {
  return (
    <div className="App">
       <h1>Hello and welcome to react</h1>
       {/* {<Hello/>}
       
       {<Greeting from="Manya" />}
       {<Greeting/> }
       <Parent/>
       <Event/> */}
       {/* <Clock/> */}
       {/* <Toggle/> */}
       {/* <Login/> */}
       <Routers/>
    </div>
  );
}

export default App;
