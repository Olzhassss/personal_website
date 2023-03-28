<script lang="ts">
    import baiterek from "$lib/images/baiterek.png";
    import baiterek_red from "$lib/images/baiterek_red.png";

    let play = false;

</script>
<style>
    @keyframes draw {
        from {
            height: 256px;
        }
        to {
            height: 0px;
        }
    }

    .animate { 
        animation-duration: 250s;
        animation-name: draw;
        animation-direction: normal;
    }
</style>


<div class="h-8 w-8 mb-2 rounded-full mx-auto bg-violet-100 overflow-hidden">
    <button class="text-xl w-full h-full scale-[2] " on:click={() => play= !play}>{play?"||":"◃"}</button>
</div>
<div class="relative  hover:scale-125 hover:-translate-y-16">
        <div class="overflow-y-hidden absolute  max-w-full top-0 z-10 {play?"animate":""}">
            <img src="{baiterek}" alt="baiterek" class="h-64">
        </div>
    <img src="{baiterek_red}" alt="baiterek" class="absolute top-0 h-64">
</div>