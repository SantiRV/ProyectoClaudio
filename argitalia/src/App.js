import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx';
import Presentacion from './components/Presentation.jsx';
import Rent from './components/Rent.jsx';
import TyC from './components/TyC.jsx'; 
import Clients from './components/Cleints.jsx';
import imagesClients from './utils/utils';
import imagesRent from './utils/constRent.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
       
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <Presentacion />
              <Main />
              <Clients images={imagesClients} />
              <Rent images={imagesRent} />
              <ContactForm />
              <Footer />
            </>
          } />

          <Route path="/terms" element={<TyC />} />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
