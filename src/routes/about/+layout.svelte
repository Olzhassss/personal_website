<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="min-h-screen text-slate-50 bg-purple-900">
	<div class=" py-14">
		<nav class="flex justify-center">
			<a class="mx-4 font-light text-3xl transition hover:text-cyan-400" href="{base}/">Home</a>
			<a class="mx-4 font-light text-3xl transition hover:text-cyan-400" href="{base}/about">About me</a>
		</nav>
	</div>

	<div class="font-mono">
		<slot />
	</div>
</div>
