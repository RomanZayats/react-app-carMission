import React from "react";
import AppRoutes from "./routes/AppRoutes";
import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <MainHeader />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
