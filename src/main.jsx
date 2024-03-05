import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import ArticlesPage from './pages/ArticlesPage.jsx'
import QuotesPage from './pages/QuotesPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/articles" replace/>,
      },
      {
        path: "articles",
        element: <ArticlesPage />,
      },
      {
        path: "quotes",
        // path: "quotes/:quoteId",
        element: <QuotesPage />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
