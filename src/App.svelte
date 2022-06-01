<script>
  import {PlacemarkService} from "./services/PlacemarkService.js";
  import {setContext} from "svelte"

  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Category from "./pages/Category.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Router from "svelte-spa-router";

  setContext("PlacemarkService", new PlacemarkService("http://localhost:4000"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/dashboard": Dashboard,
    "/category/:id": Category,
    "/logout": Main
  }
</script>

<div class="container">
  <Router {routes}/>
</div>
