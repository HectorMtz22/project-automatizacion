import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Chat from "routes/chat";
import ListOfAnimals from "routes/listOfAnimals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListOfAnimals />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
