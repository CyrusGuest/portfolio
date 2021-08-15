import './App.css';
import Home from './pages/home';
import Contact from './pages/contact'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  );
}

export default App;
