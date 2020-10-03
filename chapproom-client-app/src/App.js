import React from "react";
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import "./App.scss";
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';


function App() {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <Paper component="div" className="App">
        <Box component="div" boxShadow={4} className="main">
          {routing}
        </Box>
      </Paper >
    </ThemeProvider>
  );
}

export default App;
