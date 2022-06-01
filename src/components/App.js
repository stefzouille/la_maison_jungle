import Banner from './Banner'
import Cart from './Cart'
import '../App.css';
import '../components/ShoppingList'
import ShoppingList from '../components/ShoppingList';

function App() {
  return (
    <div>
      <Banner />
      <Cart />
      <ShoppingList />
    </div>
  )
}

export default App