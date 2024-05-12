import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Chat from "routes/chat/index";

const router = createBrowserRouter([
  {
    path: "/chat",
    element: <Chat />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
