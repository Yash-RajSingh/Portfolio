import "../fonts/font.css";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css'
import Header from "../components/header/header";
import Home from "./home";
import Projects from "./projects";
import 'animate.css';


const App = () => {
    return (
        <>
            <div className="bubbles">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>

            </div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;
