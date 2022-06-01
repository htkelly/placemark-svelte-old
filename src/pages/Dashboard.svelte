<script>
  import {getContext, onMount} from 'svelte';
  import {get} from 'svelte/store';
  import {user} from "../stores.js"
  import CategoryList from "../components/CategoryList.svelte"
  import AddCategory from "../components/AddCategory.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";

  const placemarkService = getContext("PlacemarkService");

  let categoryList = [];

  async function updateCategories() {
    let allCategories = await placemarkService.getAllCategories();
    let storedUser = get(user);
    categoryList = allCategories.filter(category => category.userid === storedUser.userId);
  };

  onMount(async () => {
    updateCategories();
  });

</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Please make a Donation"} title={"Donation Services Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="section">
    <CategoryList categoryList={categoryList} on:update={updateCategories}/>
</div>

<div class="section">
    <AddCategory on:update={updateCategories}/>
</div>
