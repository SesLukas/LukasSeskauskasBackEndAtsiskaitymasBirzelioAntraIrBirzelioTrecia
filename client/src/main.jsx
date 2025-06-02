import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import AllBooks from './pages/AllBooks.jsx';
import BookDetails from './pages/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'books', element: <AllBooks /> },
      { path: 'books/:id', element: <BookDetails /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
