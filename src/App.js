import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';

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
      <HomePage theme={theme}/>
    </div>
  );
}

export default App;
