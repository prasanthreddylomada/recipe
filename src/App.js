import HomePage from './HomePage';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  const theme = {
    colors: {
      heading: "rgb(3 3 3)",
      text: "rgba(3 ,3, 3, 1)",
      white: "#fff",
      black: " #212529",
      button: "#080a0b"
    },
    media: {
      mobile: "768px",
      tab: "1108px"
    },
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage theme={theme}/>} />
          <Route path='/home' element={<HomePage theme={theme}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
