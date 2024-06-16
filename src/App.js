import logo from './logo.svg';
import './App.css';
import Quiz from './component/quiz';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Score from './component/Score';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Quiz/>}/>
        <Route path='/score' element={<Score/>}/>
      </Routes>
    </div>
  );
}

export default App;
