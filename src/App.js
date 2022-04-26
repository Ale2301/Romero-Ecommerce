import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { CartContextProvider } from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <div id = "body">
            <Routes>
              <Route path = "/" element={<ItemListContainer/>}/>
              <Route path = "/cart" element={<Cart/>}/>
              <Route path = "/category/:categoryId" element={<ItemListContainer/>}/>
              <Route path = "/detail/:productId" element={<ItemDetailContainer/>}/>
              <Route path = "/category/:categoryId/detail/:productId" element={<ItemDetailContainer/>}/>
              <Route path = "*" element={<div>error</div>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;
 