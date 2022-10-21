//import FirstPage from './Commponents/FirstPage';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import AdherentsList from './Commponents/Adherents/AdherentsList';
import FirstPage from './Commponents/Adherents/FirstPage';
//import SearchAppBar from './Commponents/Adherents/Navbar';
import NewMember from './Commponents/Adherents/NewMember';
import DictionnairesList from './Commponents/Dictionnaires/DictionnairesList';
import EmpruntsList from './Commponents/Emprunts/EmpruntsList';
import LivresList from './Commponents/Livres/LivresList';
import RevuesList from './Commponents/Revues/RevuesList';

function App() {
 
  return (<>
  <BrowserRouter>
  <Routes>
    <Route index element={<FirstPage/>}></Route>
   <Route path="/" element={<><FirstPage/></>}></Route> 
   <Route path="/FirstPage" element={<FirstPage/>}></Route>
   <Route path="/AdherentsList" element={<><AdherentsList/></>}></Route>
   <Route path="/LivresList" element={<><LivresList/></>}></Route>
   <Route path="/EmpruntsList" element={<><EmpruntsList/></>}></Route>
   <Route path="/DictionnairesList" element={<><DictionnairesList/></>}></Route>
   <Route path="/RevuesList" element={<><RevuesList/></>}></Route>
   <Route path="/NewMember" element={<><NewMember/></>}></Route>
   </Routes>
 
    </BrowserRouter>
 </>);
}

export default App;
//<SearchAppBar/>