import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Join from './Components/Join';
import Chat from './Components/Chat';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Join}></Route>
    <Route path="/chat" Component={Chat}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
