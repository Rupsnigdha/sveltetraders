<script lang="ts">
	export let data;
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Separator } from "$lib/components/ui/separator/index.js";
	import { cn } from '$lib/utils.js';
	import * as HoverCard from "$lib/components/ui/hover-card/index.js";
</script>

<div class="grid md:grid-cols-2 min-h-screen container gap-4 md:gap-8">
	{#each data.factions as faction}
		<Card.Root class='flex flex-col'>
			<Card.Header class='flex flex-row items-start justify-between'>
				<div>
					<p class="text-sm text-muted-foreground font-light">
						{faction.name}
					</p>
					<p class="text-lg">
						{faction.symbol}
					</p>
				</div>
				<div>
					<Badge variant="secondary" class={cn(faction.isRecruiting ?'bg-green-500/40' : 'bg-red-500/40')}>{faction.isRecruiting ? 'Recruiting' : 'Not Recruiting'}</Badge>
				</div>
			</Card.Header>
			<Card.Content class='flex-1 pb-0'>
				<p class="text-sm text-muted-foreground mb-1">
					Headquarters : <span class="font-medium text-primary">{faction.headquarters === "" ? 'Unknown' : faction.headquarters}</span> 
				</p>
				<p class="text-sm text-muted-foreground">
					{faction.description}
				</p>
			</Card.Content>
			<Card.Footer class='flex flex-col'>
				<Separator class='my-4'/>
				<p class="text-sm text-muted-foreground mb-2 w-full">Traits</p>
				<div class="flex gap-2 md:gap-4 w-full">
					{#each faction.traits as trait}
					<HoverCard.Root>
						<HoverCard.Trigger
						  class="bg-muted/40 hover:bg-muted p-2 px-4 block text-xs rounded-full"
						>
						  {trait.name}
						</HoverCard.Trigger>
						<HoverCard.Content class="w-80">
							<p class="text-xs text-muted-foreground">Symbol: <span class="text-primary font-bold">{trait.symbol}</span></p>
							<Separator class="my-2" />
							<p class="text-xs tracking-wide font-medium text-muted-foreground">{trait.description}</p>
						</HoverCard.Content>
					  </HoverCard.Root>
					{/each}
				</div>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>