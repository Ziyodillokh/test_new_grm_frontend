import { RouterProvider } from "react-router-dom";
import routes from "./manager";

export default function Routes() {
  return (
    <RouterProvider router={routes} />
  )
}
