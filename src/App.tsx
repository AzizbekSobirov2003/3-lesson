import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, MySidebar } from "./components/index";
import {
  Dashboard,
  Login,
  NotFound,
  Profile,
  Register,
  Students,
  Teachers,
} from "./pages/index";

const App = () => {
  return (
    <div className="max-h-screen">
      <Router>
        <Header />
        <div className="flex">
          <MySidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
