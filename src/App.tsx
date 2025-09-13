import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// Pages link
import ChildrenPage from "./pages/childrenpage.tsx";
import IllustrationPage from "./pages/illustrationppgae.tsx";
import BlogPage from "./pages/blogpage.tsx";
import AffiliatePage from "./pages/affiliatepage.tsx";
import ComicsPage from "./pages/comicspage.tsx";
import ContactAndInfoPage from "./pages/contactandinfopage.tsx";
// David's Profile Picture
import DavidPicture from "./images/profileImg/David.jpg";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <img src={DavidPicture} alt="David's profile picture" />
        <p>David Okon</p>
      </div>
      <nav>
        <NavLink to="/">Children</NavLink>
        <NavLink to="/illustration">Illustration</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/affiliate">Affiliate</NavLink>
        <NavLink to="/comics">Comics</NavLink>
        <NavLink to="/contactandinfo">Contact and Info</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ChildrenPage />} />
        <Route path="/illustration" element={<IllustrationPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/contactandinfo" element={<ContactAndInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
