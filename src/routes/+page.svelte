<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    let rotateDuration = true;
</script>


<section>
    <div class="mx-auto container flex justify-between">
        <ul class="text-3xl leading-loose w-[35%] flex flex-col justify-center">
            <li>
                <span class="text-4xl font-semibold text-purple-800">MENU</span>
            </li>
            {#each data.linkList as link}
                <li class="hover:text-purple-500 text-purple-900 transition group font-light">
                    <a class="block relative" href="{link.href}">{link.text}
                        <span class="absolute bottom-0 left-0 h-0.5 bg-purple-500
                            w-0 group-hover:w-full transition-all duration-700"></span>
                    </a>
                </li>
            {/each}
        </ul>
        <div class="w-[60%] ml-8 p-0.5 rounded bg-purple-700
            transition duration-1000 {rotateDuration ? "hover:-rotate-2" : "hover:rotate-2"}"
        >
            <img src="/1.jpg" alt="Fantasy art" class="max-w-full rounded pointer-events-none">
        </div>
    </div>
</section>

<section>
    <div class="" id="blog"></div>
</section>