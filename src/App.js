// import logo from './logo.svg';
import './App.css';
import Message from "./Message";
import MyForm from "./form";

function App() {
    const name = 'Sulimova Darya';
    return (
        <div className="App">
            <header className="App-header">
                <Message userName={name}/>
            </header>
            <main>
                <MyForm/>
            </main>
        </div>
    );
}

export default App;
