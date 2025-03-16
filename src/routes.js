import { route } from "@react-router/dev/routes";

export default [
  route("/signin", "./components/SignIn.jsx"),
  route("/login", "./components/LogIn.jsx"),
  route("*?", "catchall.jsx"),
];