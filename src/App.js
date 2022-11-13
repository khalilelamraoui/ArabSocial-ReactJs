//import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import Messages from './components/Messages.jsx';
import Posts from './components/Posts.jsx';


function App() {
  return (
    <div className="App">
      <div class="container-fluid container-md">
        <Header />
        <div class="row g-3 main-section">
          <Menu />
          <div class="col-xl-6 col-12 main">
            <div class="sections posts d-flex justify-content-center p-3 flex-column">
              <Posts />
            </div>
          </div>
          <Messages />
        </div>
      </div>
    </div>
  );
}

export default App;
