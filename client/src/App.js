import React from "react";
import AppRoutes from "./routes/AppRoutes";
import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";
import UseWinSize from "./utils/hooks/UseWinSize";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";


function App() {
  const {width: winWidth} = UseWinSize()
  return (

    <div className="App">
      <MainHeader />
      <AppRoutes />
      {winWidth > 640 && <Footer />}
    </div>
  );
}

export default App;
