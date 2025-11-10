import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Counter from "./components/Counter_App";
import Weather from "./components/Weather_App";
import StopW from "./components/Stop_watch";

const RootLayout = () => (
  <div className="App">
    <NavBar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "counter", element: <Counter />},
      { path: "weather", element: <Weather />},
      { path: "stopwatch", element: <StopW />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
