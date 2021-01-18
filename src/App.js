import React, { Suspense } from "react";
import { LandingPage } from "./app/components";
import "./i18n";
import { Route, BrowserRouter } from "react-router-dom";
import { Preloader } from "./app/assets/Preloader";

export const App = () => {
  return (
    <Suspense fallback={() => <Preloader />}>
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={() => <LandingPage />} />
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
