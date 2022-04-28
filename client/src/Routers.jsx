import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import HomePage from './pages/home/HomePage';
import NewSalePage from './pages/sales/NewSalePage';

const Routers = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="sales">
                      <Route path="new-sale" element={<NewSalePage />} />
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default Routers;