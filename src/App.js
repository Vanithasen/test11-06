//import logo from './logo.svg';
import './App.css';
//import Homepage from './Homepage';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Card from './Component/Card';

function App() {
  return (
    <div className="App">
     {/* <Homepage />*/}

     <Header />

      <Card
        title="React Basics"
        description="Learn components, JSX, and props."
        trainer="David"
      />
      <Card
        title="React Basics"
        description="Learn components, JSX, and props."
        trainer="Davisdcsd"
      />

      <Card
        title="React Hooks"
        description="Understand useState and useEffect."
        trainer="Vanitha"
      />

      <Footer />
    </div>
   
  );
}

export default App;
