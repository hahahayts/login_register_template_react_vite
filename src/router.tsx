import { createRootRoute, createRoute } from "@tanstack/react-router";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// smaple of a root route that can be used to wrap the entire application
// const rootRoute = createRootRoute({
//   component: () => (
//     <>
//       <h1>My App</h1>
//       <Outlet />
//     </>
//   ),
// })

const rootRoute = createRootRoute();

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/login",
  component: () => <Login />,
});
const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/register",
  component: () => <Register />,
});

const routeTree = rootRoute.addChildren([loginRoute, registerRoute]);

export default routeTree;
