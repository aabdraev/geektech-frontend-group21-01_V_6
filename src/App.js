import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import Layout from './components/hoc/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div >
  );
}

export default App;
