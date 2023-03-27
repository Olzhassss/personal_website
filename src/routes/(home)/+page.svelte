<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';
	import img1 from '$lib/images/main_image.jpg';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
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
				<li class="hover:text-purple-500 text-purple-900 transition group font-light mb-4">
					<a class="block relative leading-tight pb-1" href={base + link.href}
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
					(click on title to browse)
				</span>
			</h1>
			<hr class="w-1/2 ml-[18%] border-purple-800" />
		</div>
	</div>
</section>


<section>
	<ProjectCard title="Blog entry" img_url="/images/project_preview_imgs/blog_preview.webp" page_uri="/blog" card_id="blog" img_alt="Screenshot from Tokyo Ghoul as blog entry preview">
		<p class="mx-8">
			This blog entry is a rhetorical/visual analysis of <b class="">Tokyo Ghoul</b> on the example of one chapter.
			If you are not aware, here is some general info about Tokyo Ghoul from <a href="https://en.wikipedia.org/wiki/Tokyo_Ghoul" class="text-purple-500">Wikipedia</a>:
		</p>
		<span class="mx-16 my-4 text-justify relative [&_i]:italic [&_i]:font-bold">
			<h2 class=" font-bold absolute top-0 -left-5">"</h2>
			<i>Tokyo Ghoul</i> is a Japanese dark fantasy manga series written and illustrated by Sui Ishida. It was serialized in Shueisha's seinen manga magazine Weekly Young Jump between September 2011 and September 2014, and was collected in fourteen tankōbon volumes. ... A sequel, titled <i>Tokyo Ghoul:re</i>, was serialized in Weekly Young Jump between October 2014 and July 2018, and was collected in sixteen tankōbon volumes. The story is set in a world where vicious species, known as ghouls, creatures that look like normal people but can only survive by eating human flesh, live among the human population in secrecy.
			<h2 class=" font-bold absolute top-0 -right-5">"</h2>
		</span>
		<p class="mx-8 italic">Note: Beware spoilers!</p>
	</ProjectCard>
</section>

<section>
	<ProjectCard title="Digital narrative" img_url="/images/project_preview_imgs/dn_thumbnail.png" page_uri="/projects/digital_narrative" card_id="digital_narrative" img_alt="«Love» Note thumbnail">
		<p class="mx-8">
			This digital narrative is a story of me from the past making a love confession to a girl through music. Enjoy!
			<br><br>
			«Love» Note - Everyone wants to be creative, confident and hopeful when confessing one's own feelings to someone. Same goes for me from the past, who, after many doubts, finally decided to express feelings... through a piano performance.
		</p>
	</ProjectCard>
</section>

<section>
	<ProjectCard title="Public Service announcement" img_url="/images/project_preview_imgs/psa_thumbnail.png" page_uri="/projects/public_service" card_id="public_service" img_alt="Public Service Announcement video thumbnail">
		<p class="mx-8">
			We all know that plastic is a problem. But did you know that, among all sectors, packaging is by far the largest plastic production driver? In this video, I discuss plastic packaging waste.
		</p>
	</ProjectCard>
</section>

<div class="pb-2"></div>
