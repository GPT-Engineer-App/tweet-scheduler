import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TwitterIntegration from './pages/TwitterIntegration.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/twitter" element={<TwitterIntegration />} />
      </Routes>
    </Router>
  );
}

export default App;
