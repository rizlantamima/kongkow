import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root";
import SignIn from "../pages/sign-in";
import WorkspaceThumbnailList from "../features/workspace/components/workspace-thumbnail-list";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },{
        path: "/sign-in",
        element: <SignIn />,
      },{
        path: "/test",
        element: <WorkspaceThumbnailList />,
      }
  ]);