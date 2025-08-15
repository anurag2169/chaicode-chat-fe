import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  // route("chat", "routes/chat.tsx"),
  // route("chat/:personName", "routes/chat-person.tsx"),
  route("chat-person/:personName", "routes/chat-person.tsx"),
] satisfies RouteConfig;
