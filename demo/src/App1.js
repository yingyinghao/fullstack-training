import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/Counter";
function App() {
  const heading="Ecommerce Project";
  const category=["mens","womens","kids"];
  const styles={color:'green'}
  return (
     <div className="container">
         <h2 style={styles} className="xyz"> Welcome to Mern Training</h2>
         <Counter />
         <hr/>
         <Home />
         <hr/>
         <About heading={heading} category={category}/>
     </div>
  );
}

export default App;
