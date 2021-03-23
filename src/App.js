import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Test from "./comps/Test";
import About from "./comps/About";
import StudentDetail from "./comps/StudentDetail";
import { Student } from "./comps/Student";
import { Home } from "./comps/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
				Hello Reactjs
				<Test />
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/Student">Student</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route exact path="/Student">
						<Student />
					</Route>
					<Route path="/Student/:sdid">
						<StudentDetail />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
