<script>
	import { base } from "$app/paths";


    export let src = '';
    export let classes = "ml-4 max-w-[30%] float-right";
    export let alt = '';
    export let caption = '';
</script>
<div class="{classes}">
    <img src="{base}/images/{src}" alt="{alt}" class="border h-full">
    {#if caption}
    <p class="text-center text-base">{caption}</p>
    {/if}
</div>