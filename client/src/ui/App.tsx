import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';

import { dark } from './styles/themes';
import BaseStyles from './styles/BaseStyles';
import NormalizeStyles from './styles/NormalizeStyles';
import ViewsHome from './views/Home';
import ViewsTweet from './views/Tweet';
import ViewsAuthLogin from './views/auth/Login';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(dark);

  return (
    <ThemeProvider theme={currentTheme}>
      <NormalizeStyles />
      <BaseStyles />

      {/* <Navigate to='/home' replace={true} /> */}

      {/* <ViewsHome></ViewsHome> */}
      {/* <ViewsTweet></ViewsTweet> */}

      <ViewsAuthLogin></ViewsAuthLogin>

{/* 
      <Routes>
        <Route path='/home' element={<ViewsHome />} />
      </Routes> */}
    </ThemeProvider>
  );
};

export default App;
