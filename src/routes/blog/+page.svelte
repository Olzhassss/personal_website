<script>
    import Entry from './Entry.md.svelte';
	import img1 from '$lib/images/blog_top_img2.png';
    import img2 from '$lib/images/blog_top_img2.png';
</script>

<style>
    .gradient-btw{
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,1) 10%, rgba(242,242,242,1) 95%, rgba(255,255,255,1) 100%);

    }
</style>

<div class="">
    <img class="max-h-[595px] w-full object-cover" src="{img1}" alt="">
    <div class="h-60 gradient-btw"></div>
</div>

<section>
    <h1>Analysis of <b class="">Tokyo Ghoul</b>
        <a class="text-base hover:text-myGreen transition" href="https://ww9.tokyoghoulre.com/chapter/tokyo-ghoulre-chapter-053/">
            [Access the source here &larr;]
        </a>
    </h1>
</section>

<section class="pt-0">
    <div class="mx-auto container text-lg [&_h2]:mb-2 [&_p]:mb-4 [&_em]:italic">

        <Entry />

    </div>
</section>

<div class="mt-24">
    <div class="h-60 gradient-btw rotate-180"></div>
    <img class="max-h-[595px] w-full object-cover" src="{img2}" alt="">
</div>
