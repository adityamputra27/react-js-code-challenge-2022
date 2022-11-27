import "./style.css";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
      <ul id="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li className="ml">
          <a href="/color-renderer">Color Renderer</a>
        </li>
        <li className="ml">
          <a href="/dark-mode">Dark Mode</a>
        </li>
        <li className="ml">
          <a href="/form-validation">Form Validation</a>
        </li>
        <li className="ml">
          <a href="/doc-pictures">Dog Pictures</a>
        </li>
        <li className="ml">
          <a href="/score-keeper">Score Keeper</a>
        </li>
        <li className="ml">
          <a href="/window-event">Window Event</a>
        </li>
        <li className="ml">
          <a href="/color-picker">Color Picker</a>
        </li>
        <li className="ml">
          <a href="/pixel-art">Pixel Art</a>
        </li>
        <li className="ml">
          <a href="/simple-calculator">Simple Calculator</a>
        </li>
        <li className="ml">
          <a href="/focus-an-input">Focus an input</a>
        </li>
        <li className="ml">
          <a href="/shopping-cart">Shopping Cart</a>
        </li>
      </ul>
      <AppRouter />
    </div>
  );
}

export default App;
