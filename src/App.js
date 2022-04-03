import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter';
function App() {
  const handleOnAdd = (cantidad) =>{
    console.log("se agregaron " + cantidad + " de productos")
  }
  return (
    <div>
      <NavBar/>
      <div id = "body">
        <ItemListContainer/>
        <Counter initial = {1} stock = {10} onAdd={handleOnAdd}/>
      </div>
    </div>
  );
}

export default App;
