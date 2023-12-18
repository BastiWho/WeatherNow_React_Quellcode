import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Weather from './pages/Weather';
import Landing from './pages/Landing';


const routes = createBrowserRouter([
      {
        path: "/WeatherNow/",
        element: <Landing />,
      },
      {
        path: "/WeatherNow/Weather",
        element: <Weather />,
      },
    ])

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;