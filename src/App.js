import logo from './logo.svg';
import './App.css';
import Multiselect from './Multiselectdropdown/Multiselect';

function App() {
  
  return (
   
    <>
    <Multiselect value={['Bermuda','Germany']} readonly={true}></Multiselect>


    </>
  );
}

export default App;
