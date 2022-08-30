import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Feedbackform from './component/Feedbackform';
import Feedbacklist from './component/Feedbacklist';
import FeedbackStats from './component/FeedbackStats';
import Header from './component/Header';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import Abouticonlink from './component/Abouticonlink';


const App = () => {
 
  return (
    <FeedbackProvider>
   <Router>
    <Header />
    <div className="container">
      <Routes >
      <Route exact path='/'  element={<>
      
        <Feedbackform  />
      <FeedbackStats  />
    <Feedbacklist    />
    <Abouticonlink />
      
      </>}  > 
      
    </Route>
    <Route path='/about'  element= {< AboutPage />} />
    </Routes>


    
    </div>
     
     
   </Router>
   </FeedbackProvider>
  );
}

export default App;
