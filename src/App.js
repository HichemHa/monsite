import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="emtyheader">

      </div>
      {/* <About /> */}
      <Switch>
        <Route exact path="/" render={() => <About />} />
        <Route exact path="/projects" render={() => <Projects />} />
        <Route exact path="/skills" render={() => <Skills />} />
      </Switch>
    </div>
  );
}

export default App;
