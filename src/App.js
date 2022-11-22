import './App.css';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Container fixed align="center">
          <Weather />
        <Footer />        
    </Container>
    </div>
  );
}

export default App;
