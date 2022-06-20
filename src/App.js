import logo from './logo.svg';
import './App.css';
import MySecondComponent from './MySecondComponent';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test example for React v.18</h1>
        <MySecondComponent prop1={"Shutle"} prop2={"trip"}/>
        <MySecondComponent prop1={"PROP 1"} prop2={"PROP 2"}/>

        <Button name={"Ali"} />
        <Button name={"Darshana"} />
      </header>
    </div>
  );
}

export default App;
