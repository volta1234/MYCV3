import { Route, Routes } from "react-router-dom";
import Cvinput from "./cvinput/cvinput";
import Mycv from "./mycv/mycv";
import Navbar from "./navbar";
import Profile from "./cvinput/Profile";
import Mycv2 from "./mycv/mycv2";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/cvinput" element={<Cvinput />} />
        {/* <Route path="/" element={<Mycv/>}/> */}
        <Route path="/" element = {<Mycv2/>}/>
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
