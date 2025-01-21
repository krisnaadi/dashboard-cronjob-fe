import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_login")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  );
}
