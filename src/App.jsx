import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/Home";

function App() {
  return (
    <>
    {/* //defining routes */}
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />}/> {/* Everything that is not defined will go here */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
