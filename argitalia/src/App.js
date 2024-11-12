import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx';
import Presentacion from './components/Presentation.jsx';
import Rent from './components/Rent.jsx';

function App() {
  return (
    <div >
      <Header />
      <Presentacion />
      <Main />
      <Rent />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
