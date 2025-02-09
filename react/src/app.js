import React from 'react';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body.js';
import ResMenu from './components/ResMenu.js';
import About from './components/About.js';
import ContactUs from './components/ContactUs.js';

// Define the AppLayout component
const AppLayout = () => {
    return (
        <div className='app'> 
            <Header />
            <Outlet/>
            {/* Add Footer here if needed */}
        </div>
    );
};

// Define the router configuration
const appRouter = createBrowserRouter([
        {   path: "/",
            element: <AppLayout />,
            errorElement:<Error/>,
            children:[
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contactus", 
                    element: <ContactUs />,
                },
                {
                    path : "/restaurants/:resid",
                    element: <ResMenu/>
                }
            ]
        },
        
]);

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);