import React from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom"
import App from './App';
import AddTutorial from './components/AddTutorial';
import Tutorials from './components/TutorialList';


render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route 
              path="*"
              element={
                <p>404 - What were you looking for?</p>
              }
            />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="add" element={<AddTutorial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
