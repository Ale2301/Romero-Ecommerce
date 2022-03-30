import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div>
      <NavBar/>
      <div id = "body">
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
