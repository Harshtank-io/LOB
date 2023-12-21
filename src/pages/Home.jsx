import React, { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("../components/HeroSection"));
const Cards = lazy(() => import("../components/Cards"));
const Info = lazy(() => import("../components/Info"));
const Me = lazy(() => import("../components/Me"));
// const Scroll = lazy(() => import("./SmoothScrolling"));

function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Scroll /> */}
        <HeroSection />
        <Cards />
        <Info />
        <Me />
      </Suspense>
    </div>
  );
}

export default Home;
