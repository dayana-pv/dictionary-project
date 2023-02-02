import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/dayana-pv/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>
          by Dayana Peve
        </footer>
      </div>
    </div>
  );
}
