import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
export default function Routers(){
    return (
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/dash">Dashboard</Link></li>
                
            </ul>
            <hr/>
            <div>
                <Routes>
                     <Route exact path="/" element ={<Home/>}/>
                     <Route exact path="/about" element ={<About/>}/>
                     <Route exact path="/dash" element ={<Dashboard/>}/>
                </Routes>
            </div>
        </Router>
    );

}
function Home(){
    return (<h2>Home Component</h2>);
}

function About(){
    return (<h2>About Us Component</h2>);
}

function Dashboard(){
    return (<h2>Dashboard Component</h2>);
}