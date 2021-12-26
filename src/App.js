
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/fontawesome/css/all.css';
import AddQuiz from './containers/AddQuiz';
import AllQuizes from './containers/AllQuizes';
import SingleQuiz from './containers/SingleQuiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllQuizes />} />
          <Route path="/quiz/:id" element={<SingleQuiz />} />
          <Route path="/add-quiz" element={<AddQuiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
