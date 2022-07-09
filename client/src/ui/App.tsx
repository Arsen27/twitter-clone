import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

import { light } from './styles/themes';
import BaseStyles from './styles/BaseStyles';
import NormalizeStyles from './styles/NormalizeStyles';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(light);

  return (
    <ThemeProvider theme={currentTheme}>
      <NormalizeStyles />
      <BaseStyles />

      Hello world!
    </ThemeProvider>
  );
};

export default App;
