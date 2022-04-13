import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AlbumPhoto from "./pages/albumPhoto";
import Albums from "./pages/albums";
import Users from "./pages/users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId/albums" element={<Albums />} />
        <Route path="/users/:userId/albums/:albumId" element={<AlbumPhoto />} />
      </Routes>
    </Router>
  );
}

export default App;
