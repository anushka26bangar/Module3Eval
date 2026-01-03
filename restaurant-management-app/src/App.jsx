import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import CustomerDashboard from "./pages/CustomerDashboard.jsx";
import UpdateRestuarant from "./pages/UpdateRestuarant.jsx";
import ProtectedRoutes  from "./routes/ProtectedRoutes.jsx";

function App() {
  return (
    <div className="App">
      <ProtectedRoutes>
        <Login />
      </ProtectedRoutes>
    </div>
  );
}

export default App;