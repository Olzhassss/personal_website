<script lang="ts">
    import Card from '$lib/components/Card.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
    let start = false;
    let lines = [
        {
            text: "",
            show: false
        },
        {
            text: "",
            show: false
        },
        {
            text: "",
            show: false
        }
    ]

    async function run() {
        start = true;

        for (let index = 0; index < data.iLikeTexts.length; index+=3) {
            await showText( index );
            await showText( index+1 );
            await showText( index+2 );
            await hideText( index );
            await hideText( index+1 );
            await hideText( index+2 );
        }
        
        start = false;
    }

    async function showText( index: number){
        console.log(data.iLikeTexts[index]);

        lines[index%3]["text"] = data.iLikeTexts[index];
        await delay(300);
        lines[index%3]["show"] = true;
        await delay(data.iLikeTexts[index].length * 50 + 300);
    }

    async function hideText( index: number) {
        await delay(100);
        lines[index%3]["show"] = false;
    }

    const delay = (delayInms: number) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    }
</script>


<section>
    <div class="mx-auto container cursor-default">
        <h2 class="mb-4 font-semibold">Who am I? <span class="text-slate-300 text-sm">I mean...</span></h2>
        <div class="flex border rounded flex-wrap border-collapse">
            <Card text1="Human" text2="animal" />
            <Card text1="Is" text2="forever" />
            <Card text1="A part" text2="the whole" />
            <Card text1="Of" text2="for" />
            <Card text1="Nature" text2="the Universe" />
        </div>
    </div>
</section>

<section>
    <div class="mx-auto container cursor-default">
        <h2 class="mb-4 font-semibold">What do I like? <a href="https://reflectionsfromaredhead.com/things-i-love/" class="text-slate-300 text-sm hover:text-cyan-400 transition">Original source &larr;</a></h2>
        <div class="h-48 w-full relative">
            <div class="absolute w-full h-full flex items-center justify-center transition-opacity {start ? "opacity-0" : "opacity-100"}">
                <button class="w-24 h-24 rounded-full border border-white hover:border-cyan-400 transition-colors
                    flex items-center justify-center group duration-500"
                    on:click={ async () => {await run();}}
                >
                    <div class="w-6 h-6 border border-white group-hover:border-cyan-400 transition-colors animate-ping rotate-90"></div>
                </button>
            </div>
            {#each lines as line}
                <pre class="text-3xl ml-12 transition-opacity whitespace-pre-wrap {line["show"] ? "opacity-100" : "opacity-0"}">{line["text"]}</pre>
            {/each}
        </div>
    </div>
</section>

<!-- <section>
    <div class="mx-auto container cursor-default">
        <h2 class="mb-4 font-semibold">Want to be friends? <span class="text-slate-300 text-sm">Why not? Just solve the puzzle!</span></h2>
        <div>
            
        </div>
    </div>
</section> -->