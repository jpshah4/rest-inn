import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

import Header from './Header';
import Hero from './Hero';
import ShowItemTile from './ShowItemTile';
import PropertyTypeList from './PropertyTypeList';
import BestSellerList from './BestSellerList';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PropertyTypeList />
      <BestSellerList />
    </div>
  );
}

export default App;
