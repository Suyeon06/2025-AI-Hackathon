import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/restaurant/burger")({
  component: RouteComponent,
});
function RouteComponent() {
  return <div>GIST!</div>;
}
