
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/fontawesome/css/all.css';
import AllQuizes from './containers/AllQuizes';
import SingleQuiz from './containers/SingleQuiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllQuizes />} />
          <Route path="/quiz/:id" element={<SingleQuiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
