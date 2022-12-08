import "./styles/App.css";
import Footer from "./components/Footer";
import logo from "./assets/sun.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Happy Sun Weather Logo" className="App-logo" />
        <h1>Weather Forecast</h1>
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
