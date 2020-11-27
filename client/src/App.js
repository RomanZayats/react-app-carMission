import React from "react";
import AppRoutes from "./routes/AppRoutes";
import ReviewCarousel from "./components/ReviewCarousel/ReviewCarousel";

function App() {
  return (
    <div className="App">
      <AppRoutes />
        <ReviewCarousel />
    </div>
  );
}

export default App;
