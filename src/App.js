

import { Routes, Route } from 'react-router-dom'

//importing pages
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import TeamPage from './pages/Team'
import ContactPage from './pages/Contact'
//RootLayout the Layout of all the pages
import RootLayout from './layouts/RootLayout'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route  path="/" element={<HomePage />}> </Route>
        <Route path="/about" element={<AboutPage />}> </Route>
        <Route path="/team" element={<TeamPage />}> </Route>
        <Route path="/contact" element={<ContactPage /> }> </Route>
     </Route>   
   </Routes>
  );
}

export default App;
