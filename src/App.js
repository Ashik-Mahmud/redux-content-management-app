import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/mainRoute";
import Header from "./shared/Header";

function App() {
  return (
    <main className="font-poppins">
      <Header />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
