import './App.css';
import MyButton from './components/MyButton';

function App() {
  return (
    <div className='App'>
      <h2>Welcome to my first app</h2>
      <MyButton title="버튼1"></MyButton>
      <MyButton title="버튼2" disabled={true}/>
    </div>
  );
}

export default App;
