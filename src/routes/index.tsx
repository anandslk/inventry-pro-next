// import { createBrowserRouter } from "react-router-dom";

// // import { AuthProvider } from "@/context/AuthContext";

// // import { lazy } from "react";

// // import { PublicContext } from "@/context/PublicContext";
// // import AuthCallback from "@/pages/Callback";
// // import { NotFound } from "@/components/NotFound";

// // const Dashboard = lazy(() => import("@/pages/Dashboard"));
// // const Products = lazy(() => import("@/pages/Products"));
// // const Categories = lazy(() => import("@/pages/Categories"));
// // const Transactions = lazy(() => import("@/pages/Transactions"));
// // const ChangePassword = lazy(() => import("@/pages/ChangePassword"));

// // const Login = lazy(() => import("@/pages/Login"));
// // const ForgotPassword = lazy(() => import("@/pages/forgot/Forgot"));
// // const ResetPassword = lazy(() => import("@/pages/forgot/Reset"));

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AuthProvider />,
//     children: [
//       { index: true, element: <Dashboard /> },
//       { path: "products", element: <Products /> },
//       { path: "categories", element: <Categories /> },
//       { path: "transactions", element: <Transactions /> },
//       { path: "change-password", element: <ChangePassword /> },
//       { path: "*", element: <NotFound /> },
//     ],
//   },

//   {
//     path: "/",
//     element: <PublicContext />,
//     children: [
//       { path: "login", element: <Login /> },
//       { path: "forgot", element: <ForgotPassword /> },
//       { path: "reset-password", element: <ResetPassword /> },
//       { path: "auth/callback", element: <AuthCallback /> },
//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ]);
