<script>
      import {getContext, createEventDispatcher} from 'svelte';

      const placemarkService = getContext("PlacemarkService");
      const dispatch = createEventDispatcher();

      export let categoryList;

      async function deleteCategory(id) {
        await placemarkService.deleteCategory(id);
        dispatch("update");
      }

</script>

{#each categoryList as category}
    <div class="box box-link-hover-shadow">
        <h2 class="title">
            {category.name}
        </h2>
        <a href="/#/category/{category._id}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
        </a>
        <button class="button" on:click={deleteCategory(category._id)}>
            <i class="fas fa-trash"></i>
        </button>
    </div>
{/each}
