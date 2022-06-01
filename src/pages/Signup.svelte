<script>
  import map from "../assets/map.png";
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import SignupForm from "../components/SignupForm.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"PlaceMark"} subTitle={"Sign up or Log in"}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="box">
      <h1 class="title">Sign up</h1>
      <SignupForm/>
    </div>
  </div>
  <div class="column has-text-centered">
    <img alt="A map of the world" src="{map}"  width="600">
  </div>
</div>
