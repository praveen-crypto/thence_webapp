
import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import './App.scss';

import '@mantine/core/styles.css';

//Import Pages Components
import Landing from './pages/Landing/landing';
import Register from './pages/Register/register';
import NoMatch from './pages/NoMatch';

function App() {
  
  return (
    <MantineProvider>
      {
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      }
    </MantineProvider>
  )
}

export default App;
