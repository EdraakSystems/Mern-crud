import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import Codeforwajahat from './componentes/Codeforwajahat';
import AllUsers from './componentes/AllUsers';
import AddUser from './componentes/AddUser';
import {BrowserRouter , Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={ <Codeforwajahat/>} />
      <Route path='/all' element={<AllUsers/>} />
      <Route path='/add' element={<AddUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
