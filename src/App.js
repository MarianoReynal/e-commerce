import './App.css';
import ItemListContainer from './components/layout/ItemListContainer/ItemListContainer';
import NavBar from './components/layout/NavBar/NavBar';

function App() {
  const greeting ='Bienvenido a mi tienda'
  const usuario='mariano'
  return (
    <div >
      <NavBar/>
      <ItemListContainer greeting={greeting} usuario={usuario}/>
    </div>
  );
}

export default App;
