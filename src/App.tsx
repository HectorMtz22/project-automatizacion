import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Chat from "routes/chat";
import ListOfAnimals from "routes/listOfAnimals";
import AddPet from "routes/addPet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListOfAnimals />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/add-pet",
    element: <AddPet />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
