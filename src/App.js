import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
function App() {
  const handleOnAdd = (cantidad) =>{
    console.log("se agregaron " + cantidad + " de productos")
  }
  return (
    <div>
      <NavBar/>
      <div id = "body">
        <ItemListContainer greeting = {"Titulo provisional de la tienda!"}/>
        <Counter initial = {1} stock = {10} onAdd={handleOnAdd}/>
        <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
