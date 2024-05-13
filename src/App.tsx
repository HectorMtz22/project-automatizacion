import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Chat from "routes/chat";
import ListOfAnimals from "routes/listOfAnimals";
import AddPet from "routes/addPet";
import Header from "components/Header";

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
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
