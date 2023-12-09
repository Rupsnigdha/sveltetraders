<script lang="ts">
	export let data;
	import DashboardHero from "$lib/components/dashboard/DashboardHero.svelte";
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container mx-auto max-w-6xl">
	<DashboardHero playerStats = {data.agentData.data}/>	
</section>