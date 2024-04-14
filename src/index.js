import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Body />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/projects",
        element: <Projects />
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


