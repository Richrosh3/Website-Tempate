import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer'
import Projects from './components/pages/Projects/Projects';
import Hobbies from './components/pages/Hobbies/Hobbies';

function App() {
  return (
    <Router>
        <NavBar/>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/projects" component = {Projects}/>
          <Route path = "/hobbies" component = {Hobbies}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
