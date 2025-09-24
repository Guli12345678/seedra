import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
const About = lazy(() => import("@/pages/about"));
const Home = lazy(() => import("@/pages/home"));
const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return router;
};

export default memo(AppRouter);
