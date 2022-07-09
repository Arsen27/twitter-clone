import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';

import { light } from './styles/themes';
import BaseStyles from './styles/BaseStyles';
import NormalizeStyles from './styles/NormalizeStyles';
import ViewsHome from './views/Home';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(light);

  return (
    <ThemeProvider theme={currentTheme}>
      <NormalizeStyles />
      <BaseStyles />

      <Navigate to='/home' replace={true} />

      <Routes>
        <Route path='/home' element={<ViewsHome />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
