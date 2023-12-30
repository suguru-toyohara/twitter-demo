import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import Home from './Home.jsx';

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
