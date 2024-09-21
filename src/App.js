import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import AdminVerify from './AdminVerify';
import Navbar from './Navbar';
import Login from "./Login"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/admin' element={<Admin />} />
          <Route path='/verify/:id' element={<AdminVerify />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
