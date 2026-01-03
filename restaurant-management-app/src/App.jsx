import Login from "./pages/Login.jsx";
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