// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/profile/:username" element={<Profile />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

function App() {
  return (
     <div>
      <Home />
      <Login />
      <Register />
      <Profile />
    </div>
    
  );
}
export default App;
