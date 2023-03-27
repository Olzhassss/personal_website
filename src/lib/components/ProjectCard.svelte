<script lang="ts">
	import { base } from "$app/paths";

    export let img_url: string, page_uri: string, card_id: string, img_alt: string = "", title: string;
</script>
<div class="mx-auto container text-purple-800" id="{card_id}">
    <div class="flex mx-24 lg:flex-row flex-col">
        <div class="flex flex-col justify-center flex-auto">	
            <a href="{base + page_uri}">
                <h2 class="mb-4 font-semibold text-center hover:text-purple-500 transition">
                    {title}
                </h2>
            </a>
            <slot></slot>
        </div>
        <div class="my-4 lg:my-0 lg:mx-4 shrink-0 lg:max-w-[33%]">
            <img src="{base + img_url}" class="p-[10%] rounded bg-purple-900 text-white" alt="{img_alt}">
        </div>
    </div>
</div>