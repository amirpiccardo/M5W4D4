import { RouterProvider } from 'react-router-dom';
import { router } from './route';
import { useEffect, useContext } from 'react';
import { ThemeContext } from './Context/themeContext';

const App = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  useEffect(() => {
    if(theme === 'ligth')
      document.body.style.backgroundColor = "#ffffff";
    else
    document.body.style.backgroundColor = "#4B4B4B";
  }, [theme]);

  return (
      <RouterProvider router={router}/>
  );
};

export default App;
