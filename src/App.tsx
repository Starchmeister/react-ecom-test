import './App.css'
import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/Home.tsx";
import AuthPage from "./pages/Auth.tsx";
import CheckoutPage from "./pages/Checkout.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {


  return (
    <div className="App">
        <NavBar/>
      <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/auth" Component={AuthPage} />
          <Route path="/checkout" Component={CheckoutPage} />
      </Routes>
    </div>
  )
}

export default App
