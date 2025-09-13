import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages link
import ChildrenPage from "./pages/childrenpage.tsx";
import IllustrationPage from "./pages/illustrationppgae.tsx";
import BlogPage from "./pages/blogpage.tsx";
import AffiliatePage from "./pages/affiliatepage.tsx";
import ComicsPage from "./pages/comicspage.tsx";
import ContactAndInfoPage from "./pages/contactandinfopage.tsx";
import AppLayout from "./components/ui/AppLayout.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* has sidebar */}
          <Route path="/" element={<ChildrenPage />} />
          <Route path="/illustration" element={<IllustrationPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/affiliate" element={<AffiliatePage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/contactandinfo" element={<ContactAndInfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
