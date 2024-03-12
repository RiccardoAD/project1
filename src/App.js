
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';




function App() {
  return (
    <div>
      <header>
      <MyNavbar  />
      <Welcome />

      </header>
        <body>

       <AllTheBooks />





        </body>




     <footer>
    <MyFooter />  

     </footer>
    </div>



  
  );
}

export default App;
