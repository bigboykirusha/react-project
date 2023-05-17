import Wrapper from "./components/wrapper";
import Header from "./components/header";
import MainSection from "./components/main-section";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route
          path="/more"
          element={
            <div className="mt-80 flex items-center justify-center text-center text-3xl">
              Тут должна быть другая страница, но мне лень ее верстать.
            </div>
          }
        />
      </Routes>
    </Wrapper>
  );
}

export default App;
