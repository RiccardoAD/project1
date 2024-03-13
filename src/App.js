
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
// import Welcome from './components/Welcome';
// import AllTheBooks from './components/AllTheBooks';
import Horror from "./data/horror.json"
import Romance from "./data/romance.json"
import Fantasy from "./data/fantasy.json"
import History from "./data/history.json"
import BookList from './components/BookList';

 import SingleBook from './components/SingleBook';
 


function App() {
  return (
    <div>
      <header>
       <MyNavbar  />
      {/* <Welcome /> */} 

      </header>
        <body>

       {/* <AllTheBooks /> */}

             {/* <BookList listaLibri={Horror}/> */}
             {/* <SingleBook    book={Fantasy[0]}></SingleBook> */}
       {/* <BookList  books={Horror}/> */}
       <BookList />




        </body>




     <footer>
    <MyFooter />  

     </footer>
    </div>



  
  );
}

export default App;
