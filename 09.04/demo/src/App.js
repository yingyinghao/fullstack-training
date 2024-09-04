import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import Counter from "./components/Counter";
import Contact from "./components/Contact";
import India from "./components/child/India";
import China from "./components/child/China";
import USA from "./components/child/USA";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <main>
      <Router>
        <Nav />
        <section className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />}>
              <Route path="india" element={<India />} />
              <Route path="usa" element={<USA />} />
              <Route path="china" element={<China />} />
            </Route>

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </section>
      </Router>
    </main>
  );
};

export default App;
