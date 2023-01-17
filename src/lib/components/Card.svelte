<script lang="ts">
    export let text1: string, text2: string;
</script>

<div class="p-8 text-xl inline-block flex-auto border-collapse tracking-wide hover:bg-cyan-500 transition duration-700">
    <p>{text1}</p>
    <p class="transition duration-700 font text-purple-900">... or {text2}?</p>
</div>