<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';
	import img1 from '$lib/images/1.jpg';
	import blog_preview_img from '$lib/images/blog_preview.webp';
	export let data: PageData;

	let rotateDuration = true;
</script>

<section>
	<div class="mx-auto container flex justify-between">
		<ul class="text-3xl leading-loose w-[35%] flex flex-col justify-center">
			<li>
				<span class="text-4xl font-semibold text-purple-800">MENU</span>
			</li>
			{#each data.navigation as link}
				<li class="hover:text-purple-500 text-purple-900 transition group font-light">
					<a class="block relative" href={base + link.href}
						>{link.text}
						<span
							class="absolute bottom-0 left-0 h-0.5 bg-purple-500
                            w-0 group-hover:w-full transition-all duration-700"
						/>
					</a>
				</li>
			{/each}
		</ul>
		<div class="w-[60%] ml-8 flex items-center">
			<div
				class="p-0.5 rounded bg-purple-700 transition duration-1000
				group z-10 {rotateDuration ? 'hover:-rotate-2' : 'hover:rotate-2'}"
			>
				<img src={img1} alt="Fantasy art" class="block max-w-full rounded pointer-events-none z-20" />
				<a
					class="block px-[40%] -mt-6 text-white font-mono group-hover:mt-0 hover:scale-110 transition-all duration-1000 relative -z-10"
					href="https://www.artstation.com/artwork/rnV6L"
				>
					Source &larr;
				</a>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="rounded-t w-full bg-purple-50">
		<div class="pt-8 container mx-auto rounded ">
			<h1 class="text-left ml-[20%] mb-4 text-purple-800">
				My works
				<span class="text-base">
					(click to browse)
				</span>
			</h1>
			<hr class="w-1/2 ml-[18%] border-purple-800" />
		</div>
	</div>
</section>


<section class="hover:bg-cyan-50 transition duration-700">
	<a href="{base}/blog">
	<div class="mx-auto container text-purple-800 " id="blog">
		<div class="flex">
			<div class="">	
				<h2 class="mb-4 font-semibold">
					Blog entry
				</h2>
				<p class="pl-4">
					OH NO THIS IMAGE IS A SPOILER OF THE BLOG TARGET!<br>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus vel rerum dolorum deleniti hic, itaque recusandae iusto dicta eum cum illo iure consectetur laborum molestiae, in quod aliquid et.
				</p>
			</div>
			<div class="mx-4 shrink-0">
				<img src="{blog_preview_img}" class="max-h-[350px] max-w-[350px] p-0.5 rounded bg-purple-700" alt="Screenshot from Tokyo Ghoul as blog entry preview">
			</div>
		</div>
	</div>
</a>
</section>

<div class="pb-2"></div>
