// import logo from './logo.svg';
import './App.css';
import Theme from './Recipe-theme.js';
import Navigation from './Navigation.js';
import Recipe from './Recipe.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Theme />
        <Navigation />
      </header>
      <section>
        <Recipe />
      </section>
      <footer>
        <p>
          Built by{' '}
          <a
            className="footer__name-link"
            href="https://www.katecherie.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kate Cherie
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
