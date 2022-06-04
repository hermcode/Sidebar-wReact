import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Support from './pages/Support';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />}/>
          <Route path='/products' element={<Products /> }/>
          <Route path='/reports' element={<Reports /> }/>
          <Route path='/team' element={<Team /> }/>
          <Route path='/messages' element={<Messages /> }/>
          <Route path='/support' element={<Support /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
