<script>
    import WriteUp from './WriteUp.md.svelte';

    const video_hash = "j_CO2AAs7os";
</script>
<svelte:head>
    <title>Digital Narrative</title>
</svelte:head>

<section>
    <h1 class="mb-2">
        Digital narrative - «Love» Note
    </h1>
    <div class="text-center">
        <a class="text-base hover:text-myGreen transition" href="https://youtu.be/{video_hash}">
            [Access the video here &larr;]
        </a>
        <a class="text-base hover:text-myGreen transition" href="https://github.com/Olzhassss/personal_website/blob/master/src/routes/projects/digital_narrative/WriteUp.md.svelte">
            [Access the markdown here &larr;]
        </a>
    </div>
</section>

<section class="pt-0">
    <div class="mx-auto container text-lg [&_h2]:mb-2 [&_p]:mb-4 [&_em]:italic">
        <div class="flex justify-center mb-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/{video_hash}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <WriteUp />

    </div>
</section>
