import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import NotFound from "../NotFound";
import Name from "../ourTeam/Name";

export default function Routing() {
  return (
    <>
      <Routes>
        {" "}
        {/*Routes works like a switch.*/}
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Main />} />
        <Route path="/about/:name" element={<Name />} />
        <Route path="/contact" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
