import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeListing from './component/EmployeeListing';
import EmpCreate from './component/EmpCreate';
import EmpDetails from './component/EmpDetails';
import EmpEdit from './component/EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>React js CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeListing />} >  </Route>
          <Route path='/employee/create' element={<EmpCreate />} > </Route>
          <Route path='/employee/details/:empid' element={<EmpDetails />} > </Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />} > </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
