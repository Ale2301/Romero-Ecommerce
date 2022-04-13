import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <div id = "body">
          <Routes>
            <Route path = "/" element={<ItemListContainer/>}/>
            <Route path = "/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path = "/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path = "/category/:categoryId/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path = "*" element={<div>error</div>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
