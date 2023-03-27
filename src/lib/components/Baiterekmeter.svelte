<script lang="ts">
    import baiterek from "$lib/images/baiterek.png";
    import baiterek_red from "$lib/images/baiterek_red.png";
    import { linear } from 'svelte/easing';
	import { fade } from "svelte/transition";

    let play = false;
    let percent_filled = 0;
    let height = (100 - percent_filled)*256;


    function shrink(node, {duration}) {
        return {
            duration,
            css: t => {
                const eased = linear(t);

                return `
                    height: ${eased * 256}px;
                `
            }
        }
    }

</script>
<div class="h-8 w-8 mb-2 rounded-full mx-auto bg-violet-100 overflow-hidden">
    <button class="text-xl w-full h-full scale-[2] " on:click={()=> play=!play}>{play?"||":"◃"}</button>
</div>
<div class="relative  hover:scale-125 hover:-translate-y-16">
    {#if !play}
        <div class="overflow-y-hidden absolute  max-w-full top-0 z-10" in:fade out:shrink="{{duration:250000}}">
            <img src="{baiterek}" alt="baiterek" class="h-64">
        </div>
    {/if}
    <img src="{baiterek_red}" alt="baiterek" class="absolute top-0 h-64">
</div>