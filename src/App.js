import { Route, Routes } from 'react-router-dom';

import { DashboardPage, PageNotFound, LoginPage } from './pages'

function App() {
 
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;