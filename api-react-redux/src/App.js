// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' exact Component={ProductListing} />
          <Route path='/product/:productId' exact Component={ProductDetail} />
          <Route>404 not found</Route>
      </Routes>
    </div>
  );
}

export default App;
