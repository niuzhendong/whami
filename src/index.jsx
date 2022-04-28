import React from 'react';
import { createRoot } from 'react-dom/client';
import MapBox from './components/map/index.jsx'
createRoot(document.getElementById('root')).render(<React.StrictMode><MapBox tab="home" /></React.StrictMode>);