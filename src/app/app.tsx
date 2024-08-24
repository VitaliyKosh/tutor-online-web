/* eslint-disable max-len */
import { type FC, Suspense } from "react";
import "./styles/index.css";
// import { classNames } from 'shared/lib/classNames/classNames'
// import { useTheme } from 'app/providers/ThemeProvider'
// import { PageLoader } from 'widgets/PageLoader'
import { AppRouter } from "./providers/app-router";
// import { Navbar } from 'widgets/Navbar'
// import { Header } from 'widgets/Header'
import classNames from "classnames";

const App: FC = () => {
  return (
    <div className={classNames("app")}>
      {/* <Header /> */}
      <Suspense fallback={<div></div>}>
        <AppRouter />
      </Suspense>
      {/* <Navbar /> */}
    </div>
  );
};

export default App;
