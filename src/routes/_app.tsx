import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toaster } from "@/components/ui/toaster";
import { createFileRoute, Link, Outlet, redirect, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  beforeLoad: async ({ location }) => {
    if (localStorage.getItem("accessToken") === null) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem("accessToken");
    navigate({ to: '/login' });
  }

  return (
    <>
      <div className="py-4 px-36 flex justify-between text-lg ">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Dashboard
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={logout} className="cursor-pointer">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <hr />
      <div className="py-4 px-36">
        <Outlet />
      </div>
      <Toaster />
    </>
  );
}
