import Appbar from "./component/appbar.js"
import Footer from "./component/footer.jsx"
import colors from "./config/colors"
import Home from "./pages/Home.js";

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors.grey }} >
      <Appbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
