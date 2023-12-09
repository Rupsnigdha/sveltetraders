<script lang="ts">
  export let playerStats;
  import DashboardHeroShips from "./DashboardHeroShips.svelte";
  import DashboardHeroStats from "./DashboardHeroStats.svelte";
	import DashboardHeroWelcome from "./DashboardHeroWelcome.svelte";
</script>

<section class="pt-4 px-4">
  <div class="flex justify-between">
    <DashboardHeroWelcome playerName={playerStats.symbol}/>
    <DashboardHeroStats playerHQ={playerStats.headquarters} playerCredits={playerStats.credits} playerFaction={playerStats.startingFaction} playerShipCount={playerStats.shipCount}/>
  </div>
</section>