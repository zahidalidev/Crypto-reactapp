import { Route, Redirect } from "react-router-dom"

import Appbar from "./component/appbar.js"
import Footer from "./component/footer.jsx"
import colors from "./config/colors"
import Home from "./pages/Home.js";
import Tab1 from "./pages/Tab1.js"

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors.grey }} >
      <Appbar />
      <Route path="/" exact render={() => <Home />} />
      <Route path="/tab1" exact render={() => <Tab1 />} />
      <Footer />
    </div>
  );
}

export default App;
