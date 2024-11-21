import { Outlet } from "@remix-run/react";

export default function Auth() {
  return (
    <div className="container grid min-h-screen place-items-center bg-bg-primary">
      <Outlet />
    </div>
  );
}
