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
import Footer from '../components/footer/footer'
import Achievements from "./achievements";

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
                <div style={{padding: "1.2rem", paddingBottom: "0"}}>
                    <Router>
                        <Header />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/projects">
                                <Projects />
                            </Route>
                            <Route path="/achievements">
                                <Achievements />
                            </Route>
                        </Switch>
                    </Router>
                    <Footer />
                </div>
        </>
    );
};

export default App;
