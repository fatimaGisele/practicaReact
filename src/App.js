import {useState} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import './App.scss';

function App() {
  const [task, setTask] = useState([{}]);
  
  return (
    <>
      <Header/>
      <Main 
      nombre='Fátima Gisele' 
      mascota='Milanesa'
      hobbie={['estudiar','salir a caminar', 'nadar', 'viajar']}/>
      <Footer/>
    </>
  );
}

export default App;
