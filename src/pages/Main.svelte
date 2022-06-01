<script>
  import map from "../assets/map.png";
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import {getContext} from "svelte";

  const placemarkService = getContext("PlacemarkService");
  placemarkService.logout();
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"PlaceMark"} subTitle={"Sign up or Log in"}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <img width="300" src="{map}" alt="A map of the world">
  </div>
  <div class="column">
    <h1 class="title">Mark your points of interest</h1>
    <p>Login or sign up to use our application!</p>
  </div>
</div>
