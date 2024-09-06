import About from "./components/About";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Nav from "./components/Nav";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Notfound from "./components/Notfound";
import India from "./components/child/India"
import Usa from "./components/child/Usa"
import China from "./components/child/China"
import CategoryProducts from "./components/CategoryProducts";
const App=()=>{
    return(
        <main>
          <Router>
            <Nav />
            <section className="container">
                <Routes>
                    <Route path="" element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="counter" element={<Counter />}/>
                    <Route path="gallery" element={<Gallery />}/>
                    <Route path="category/:cname" element={<CategoryProducts />}/>
                    <Route path="contact" element={<Contact />}>
                         <Route path="india" element={<India />}/>
                         <Route path="usa" element={<Usa />}/>
                         <Route path="china" element={<China />}/>
                    </Route>
                    <Route path="*" element={<Notfound />}/>
                </Routes>
            </section>
        </Router>
        </main>
    )
}
export default App;