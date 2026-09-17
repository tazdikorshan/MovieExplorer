import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route
        path="*"
        element={
          <main className="not-found">
            <h1>404</h1>
            <p>Page not found.</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
