import "./App.css";
import Home from "./Pages/Home";
import Howitworks from "./Pages/Howitworks";
import Whyinvesting from "./Pages/Whyinvesting";
import MarketplaceDetail from "./Pages/MarketplaceDetail";
import Resources from "./Pages/Resources";
import Faq from "./Pages/Faq";
import Company from "./Pages/Company";
import Index from "./assets/components/Index";
import AboutUs from "./Pages/AboutUs";
import LearningCenter from "./Pages/LearningCenter";
import LearnDetail from "./Pages/LearnDetail";

import Contactus from "./Pages/Contactus";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

<<<<<<< HEAD
import AccountInfo from "../src/Pages/AccountInfo";
=======
import AccountInfo from "../src/Pages/AccountInfo"
>>>>>>> e4f050ca3cdd0a3010a3cd1d167729ad6447b8de

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MarketPlace } from "./Pages/MarketPlace";
import Wallet from "../src/Pages/Wallet";
import Settings from "../src/Pages/Settings";
import { Profile } from "./Pages/Profile";
import { Notification } from "./Pages/Notification";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/why-investing-togerther"
              element={<Whyinvesting />}
            ></Route>
            <Route
              path="/marketPlace-detail"
              element={<MarketplaceDetail />}
            ></Route>
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/learningcenter" element={<LearningCenter />}></Route>
            <Route path="/learndetail" element={<LearnDetail />}></Route>

            <Route path="/contact-us" element={<Contactus />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/account-info" element={<AccountInfo />}></Route>
            <Route path="/wallet" element={<Wallet />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route
              path="/why-investing-togerther"
              element={<wInvesting />}
            ></Route>
            <Route path="/market-place" element={<MarketPlace />} />
            <Route path="/howitworks" element={<Howitworks />}></Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/notification" element={<Notification />} />



            <Route path="market-place" element={<MarketPlace />} />
            <Route path="/howitworks" element={<Howitworks />}></Route>
            <Route path="/contact-us" element={<Contactus />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>

            <Route path="/account-info" element={<AccountInfo />}></Route>
            <Route path="/wallet" element={<Wallet/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>
            <Route path="/why-investing-togerther" element={<wInvesting />}></Route>
            <Route path="market-place" element={<MarketPlace />} />
            <Route path="/howitworks" element={<Howitworks />}></Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/notification" element={<Notification />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
