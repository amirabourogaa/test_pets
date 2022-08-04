import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Home />} >
        <Route index element={<Header />}></Route>

        </Route>
      
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
