<script>
  import link from '$lib/assets/icons/link.svg'
  export let playerHQ, playerCredits, playerFaction, playerShipCount;
</script>

<div class="stats stats-vertical shadow">
    <div class="stat">
        <div class="stat-title  font-bold uppercase text-right">Headquarters <img src={link} alt="">
        </div>
        <div class="stat-value text-right text-primary">{playerHQ}</div>
        <div class="stat-desc text-right">The coordinates of your headquarters.</div>
      </div>
    <div class="stat">
      <div class="stat-title font-bold uppercase text-right">Credits</div>
      <div class="stat-value textp text-primary text-right">{playerCredits}</div>
      <div class="stat-desc text-right">The amount of credits you have available.</div>
    </div>
    
    <div class="stat">
      <div class="stat-title font-bold uppercase text-right">Faction</div>
      <div class="stat-value text-right text-primary">{playerFaction}</div>
      <div class="stat-desc text-right">The faction you started with.</div>
    </div>
    
    <div class="stat">
      <div class="stat-title  font-bold uppercase text-right">Ship count</div>
      <div class="stat-value text-right text-primary">{playerShipCount}</div>
      <div class="stat-desc text-right">The number of ships owned by you.</div>
    </div>
  </div>