import './App.css';
import Content from './components/Content/Content';
import ExtraContent from './components/ExtraContent/ExtraContent';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="side-space">
      <Logo />
      <Header />
      <Content />
      <hr className="hr-line" />
      <ExtraContent />
      <Footer />
    </div>
  );
}

export default App;
