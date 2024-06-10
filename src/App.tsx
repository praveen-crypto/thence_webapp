
import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import './App.scss';

import '@mantine/core/styles.css';

//Import Pages Components
import Landing from './pages/Landing/landing';
import Register from './pages/Register/register';
import Onboard from './pages/Onboard/onboard';
import NoMatch from './pages/no_Match';
import TermsConditions from './pages/terms_Conditions';
import PrivacyPolicy from './pages/privacy_Policy';


function App() {
  
  return (
    <MantineProvider>
      {
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/onboard' element={<Onboard />} />
          <Route path='/terms' element={<TermsConditions />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      }
    </MantineProvider>
  )
}


export default App;
