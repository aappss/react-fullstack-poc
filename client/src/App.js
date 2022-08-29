
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/createpost">Create Post</Link>
      <Link to="/">Home</Link>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/createpost" exact element={<CreatePost />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
