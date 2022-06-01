<script>

    import {createEventDispatcher, getContext} from "svelte";

    const placemarkService = getContext("PlacemarkService");
    const dispatch = createEventDispatcher();

    export let categoryId;

    let placeName="";
    let description="";
    let latitude="";
    let longitude="";

    async function addPlace() {
        const place = {
            "name": placeName,
            "description": description,
            "img": "test",
            "location": {
                "latitude": latitude,
                "longitude": longitude
            },
        };
        console.log(place);
        await placemarkService.addPlace(categoryId, place);
        dispatch("update");
        placeName="";
        description="";
        latitude="";
        longitude="";
    }
</script>

<form class="box" on:submit|preventDefault={addPlace}>
    <label>Enter Place Details:</label>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <input bind:value={placeName} class="input" type="text" placeholder="Enter Name">
            </div>
            <div class="field">
                <input bind:value={description} class="input" type="text" placeholder="Enter description">
            </div>
            <div class="field">
                <input bind:value={latitude} class="input" type="text" placeholder="Enter latitude">
            </div>
            <div class="field">
                <input bind:value={longitude} class="input" type="text" placeholder="Enter longitude">
            </div>
        </div>
    </div>
    <button class="button is-primary">Add Place</button>
</form>