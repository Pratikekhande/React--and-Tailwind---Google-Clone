import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const Rout = () => (
  <div className="p-4">
    <Routes>
      <Route exact path="/" element={<Results/> 
      } >
      </Route>
      <Route exact path="/search" element={<Results />}>
        
      </Route>
      <Route path="/images" element={<Results />}>
        
      </Route>
      <Route path="/news" element={<Results />}>
        
      </Route>
      <Route path="/videos" element={<Results />}>
        
      </Route>

    </Routes>
  </div>

);