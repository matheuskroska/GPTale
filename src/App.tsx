import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import GlobalStyles from './styles/global';
import { BodyWrapper } from './components/BodyWrapper/BodyWrapper';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <GlobalStyles />
      <BodyWrapper>
        <App />
      </BodyWrapper>
    </HashRouter>
  );
}
