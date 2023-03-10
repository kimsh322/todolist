import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/todayList" element={<TodayList />} />
          <Route path="/todayEnd" element={<TodayEnd />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
