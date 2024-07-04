import About from "./pages/About";
import { useRoutes } from "react-router-dom";
import Reviews from "./pages/Reviews";
import ContactUs from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  const element = useRoutes([
    {
      path: '/about',
      element: <About to="about" />,
    },
    {
      path: '/reviews',
      element: <Reviews to="review" />,
    },
    {
      path: '/contact',
      element: <ContactUs to="contact" />,
    },
    {
      path: '/',
      element: <Home to="home" />,
    },
  ]);

  return <div className="App">{element}</div>;
}

export default App;
