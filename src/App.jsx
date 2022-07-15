import './App.css';

function App() {
  return (
    <div className='App'>
      <p>{import.meta.env.VITE_MY_CUSTOM_VAR}</p>
    </div>
  );
}

export default App;
