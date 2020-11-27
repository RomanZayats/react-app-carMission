import React from "react";
import AppRoutes from "./routes/AppRoutes";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

function App() {
  return (
    <div className="App">
      <FeedbackForm />
      <AppRoutes />
    </div>
  );
}

export default App;
