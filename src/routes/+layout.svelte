<script lang="ts">
    import type { LayoutData } from './$types';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
    
    export let data: LayoutData;

    import "../app.css";
</script>

<div class="w-full bg-purple-900">
    <div class="mx-3 rounded bg-purple-50">

        <Header />

        <slot />

    </div>
</div>
<Footer />