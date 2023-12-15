import './App.css';
import Header from './components/Header';
import BasicInfo from './ui/BasicInfo';
import AddressInfo from './ui/AddressInfo';
import { Route, Routes } from "react-router-dom"
import Home from './ui/Home';

function App() {
  return (
    
    <div className="App">
      <Header />
      <h1>Hoc Project</h1>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/addinfo' Component={BasicInfo} />
        <Route path='/addextra/:userName?' Component={AddressInfo} />
        <Route path='/editinfo/:id' Component={BasicInfo}/>
      </Routes>
    </div>
    
  );
}

export default App;
