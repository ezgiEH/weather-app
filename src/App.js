import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
    <Container fixed align="center">
        <Header />
          <Weather />
        <Footer />        
    </Container>
    </div>
  );
}

export default App;
