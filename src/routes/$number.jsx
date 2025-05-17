// import { createFileRoute, Link } from "@tanstack/react-router";
// export const Route = createFileRoute("/$number")({
//   component: RouteComponent,
// });
// function RouteComponent() {
//   const { number } = Route.useParams();
//   return (
//     <>
//       {number}
//       <Link to="/$number/burger"> 버거</Link>
//       <Link to="/$number/drink"> 음료</Link>
//       <Link to="/$number/side"> 사이드</Link>
//     </>
//   );
// }

import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { useState } from "react";
export const Route = createRootRoute({
  component: RootComponent,
});
function RootComponent() {
  const [page, wherePage] = useState(1);
  return (
    <React.Fragment>
      <div className="card flex gap-4 justify-between">
        <Link
          to="/restaurant"
          className="p-6 w-full rounded-lg bg-gray-300 text-black"
        >
          먹고 가기
        </Link>
        <Link
          to="/takeout"
          className="p-6 w-full rounded-lg bg-gray-300 text-black"
        >
          가져 가기
        </Link>
      </div>
      <Outlet />
    </React.Fragment>
  );
}
