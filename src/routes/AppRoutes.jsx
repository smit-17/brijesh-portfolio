
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import Home from '../Pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        // errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },

        ]
    }
]);