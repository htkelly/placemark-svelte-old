<script>
  import {createEventDispatcher, getContext} from "svelte";
  import {get} from 'svelte/store';
  import {user} from "../stores.js";

  const placemarkService = getContext("PlacemarkService");
  const dispatch = createEventDispatcher();

  let categoryName="";

  async function addCategory() {
      let storedUser = get(user);
      const category = {
      name: categoryName,
      userid: storedUser.userId
      };
      await placemarkService.addCategory(category);
      dispatch("update");
      categoryName="";
  }
</script>

<form on:submit|preventDefault={addCategory}>
    <div class="field">
        <label class="label">Category Name</label> <input bind:value={categoryName} class="input" type="text" placeholder="Enter category name">
    </div>
    <button class="button is-link">Add Category</button>
</form>