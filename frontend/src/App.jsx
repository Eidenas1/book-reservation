import "./App.css";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from "react-router";
// App.jsx mostly used for add layouts, navbar, footers
// In bigger pages somethimes creating separate file for layouts
function App() {
  return (
      <Routes>
       <Route path="/" element={<MainPage/>}/>
       <Route path="/:id" element={<DetailsPage/>}/>
      </Routes>
  );
}

export default App;
