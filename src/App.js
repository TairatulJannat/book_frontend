import logo from './logo.svg';
import './App.css';
import Main from'./Main';
import Header from './Header';
import Login from './login';
// import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
 <div className="App">
   {/* <BrowserRouter> */}
    <Header />
     <Main />
      {/* <Login /> */}
   {/* </BrowserRouter>  */}
    </div>
  );
}

export default App;
