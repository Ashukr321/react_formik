import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { Suspense ,lazy} from "react";
const Ex_1 = lazy(() => import("./components/Ex_1"));
import Loader from "./components/Loader";
const App = () => {
  return (
    <>
      <Suspense  fallback={<Loader/>}>
        <Router>
            <Routes>
            <Route path="/" element = {<Ex_1/>} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
