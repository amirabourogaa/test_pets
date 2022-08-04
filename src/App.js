import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pets from './components/pets list/Pets';
import AddPet from './components/addPet/AddPet';
import Edit from './components/Edit/Edit';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Header />}>
        <Route path="/home" element={<Home />} />
        <Route path="/pets" element={<Pets />}></Route>
        <Route path="/addpets" element={<AddPet />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>

        </Route>
      
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
