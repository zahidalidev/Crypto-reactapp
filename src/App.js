import { Route, Redirect } from "react-router-dom"

import Appbar from "./component/appbar.js"
import Footer from "./component/footer.jsx"
import colors from "./config/colors"
import Home from "./pages/Home.js";
import Tab1 from "./pages/Tab1.js"
import Tab2 from "./pages/Tab2.js";

function App() {
  return (
    <>
      <Appbar />
      <Route path="/" exact render={() => <Home />} />
      <Route path="/tab1" exact render={() => <Tab1 />} />
      <Route path="/tab2" exact render={() => <Tab2 />} />
      <Footer />
    </>
  );
}

export default App;
