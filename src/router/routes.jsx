import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SearchPage from "../pages/SearchPage/SearchPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/search',
        element: <SearchPage />
    }
])