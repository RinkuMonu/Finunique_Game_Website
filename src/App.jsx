import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { AppLayout } from "./AppLayout/applayout";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./NavLinkCom/Aboutus/aboutus";
import Navbar from "./HomeComponets/Navbar/navbar";
import Footer from "./HomeComponets/Footer/footer";
import ContactUs from "./NavLinkCom/Contactus/contactus";
import PrivacyPolicy from "./PrivacyPolicy/privacyPolicy";
import TermsAndConditions from "./TermsConditions/termsAndConditions";
import ReturnAndCancelation from "./ReturnAndCancelation/returnandcanelation";
import { PoolGame } from "./Games/Pool/pool";
import { PokerGame } from "./Games/Poker/poker";
import TrafficLight from "./li";
import { RummyGame } from "./Games/Rummy/MainRummy/rummy";
import { RummyPointGame } from "./Games/Rummy/RummyChildGame/Rummypoint/rummypoint";
import { RummyPoolGame } from "./Games/Rummy/RummyChildGame/RummyPool/rummypool";
import { RummyDealGame } from "./Games/Rummy/RummyChildGame/DealRummy/rummyDeal";
import LoginPage from "./Login/login";
import RegisterPage from "./Register/regiter";
import DownloadPage from "./DownloadAPK/download";
import Profilepage from "./Profile/profile";
import { ContextProvider } from "./Service/context";
import { NotFoundPage } from "./404/notFound";
import { EightBallPool } from "./Games/Pool/PoolChildGame/8-Ball/8-ballpool";
import { NineBallPool } from "./Games/Pool/PoolChildGame/9-Ball/9-ballpool";
import { StraightBallPool } from "./Games/Pool/PoolChildGame/StraightBall/Straight ";
import { Texas } from "./Games/Poker/TexasPoker/texas";
import { PotPokar } from "./Games/Poker/Pot-limmt/pot";
import { PLOpokar } from "./Games/Poker/Pot-liimt (PLO)/PLO";
import BlogPage from "./Blog/BlogPage";
import BlogPostDetail from "./Blog/Extradetails";
function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms_and_conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/return_cancellation"
            element={<ReturnAndCancelation />}
          />
          <Route path="/game_rummy" element={<RummyGame />} />
          <Route path="/game_pool" element={<PoolGame />} />
          <Route path="/game_poker" element={<PokerGame />} />
          <Route path="/point_rummy_game" element={<RummyPointGame />} />
          <Route path="/pool_rummy_game" element={<RummyPoolGame />} />
          <Route path="/deal_rummy_game" element={<RummyDealGame />} />
          <Route path="/pool_eight_game" element={<EightBallPool />} />
          <Route path="/pool_nine_game" element={<NineBallPool />} />
          <Route path="/pool_straight_game" element={<StraightBallPool />} />
          <Route path="/pokar_texas_game" element={<Texas />} />
          <Route path="/pokar_pot_game" element={<PotPokar />} />
          <Route path="/pokar_plo_game" element={<PLOpokar />} />
          <Route path="/li" element={<TrafficLight />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/download_apk" element={<DownloadPage />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/our_blog" element={<BlogPage />} />
          <Route path="/blog/post/:slug" element={<BlogPostDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
