<script lang="ts">
	export let data;
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import Users from 'lucide-svelte/icons/users';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	
	import House from 'lucide-svelte/icons/house';
	import Receipt from 'lucide-svelte/icons/receipt';
	import Rocket from 'lucide-svelte/icons/rocket';
	import User from 'lucide-svelte/icons/user';
	import { goto } from '$app/navigation';
</script>

<div class="flex min-h-screen container flex-col gap-4 md:gap-8">
	<div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-6">
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Symbol</Card.Title>
				<User class="h-4 w-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.user.symbol}</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Faction</Card.Title>
				<Users class="h-4 w-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.user.startingFaction}</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Credits</Card.Title>
				<DollarSign class="h-4 w-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.user.credits}</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Headquarters</Card.Title>
				<House class="h-4 w-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.user.headquarters}</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Ships</Card.Title>
				<Rocket class="h-4 w-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.user.shipCount}</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Contracts</Card.Title>
				<Receipt class="h-4 w-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.contracts.length}</div>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="grid gap-4 xl:grid-cols-2 md:gap-8">
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Ships</Card.Title>
				<Rocket class="h-4 w-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Caption>A list of your ships.</Table.Caption>
					<Table.Header>
						<Table.Row>
							<Table.Head>Name</Table.Head>
							<Table.Head>Role</Table.Head>
							<Table.Head>Inventory</Table.Head>
							<Table.Head>Crew</Table.Head>
							<Table.Head>Fuel</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each data.ships as ship}
							<Table.Row on:click={()=> {console.log('dwwd')}}>
								<Table.Cell>{ship.symbol}</Table.Cell>
								<Table.Cell class='capitalize'>{ship.registration.role.toLowerCase()}</Table.Cell>
								<Table.Cell>{ship.cargo.capacity === 0 ? '-' : `${ship.cargo.inventory.length}/${ship.cargo.capacity}`}</Table.Cell>
								<Table.Cell>{ship.crew.capacity === 0 ? '-' : `${ship.crew.current}/${ship.crew.capacity}`}</Table.Cell>
								<Table.Cell>{ship.fuel.capacity === 0 ? '-' : `${ship.fuel.current}/${ship.fuel.capacity}`}</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Contracts</Card.Title>
				<Receipt class="h-4 w-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Caption>A list of your contracts.</Table.Caption>
					<Table.Header>
						<Table.Row>
							<Table.Head>Faction</Table.Head>
							<Table.Head>Type</Table.Head>
							<Table.Head>Status</Table.Head>
							<Table.Head>Payment</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each data.contracts as contract, i}
							<Table.Row on:click={()=> {goto(`/dashboard/contracts/${contract.id}`)}} class='cursor-pointer'>
								<Table.Cell>{contract.factionSymbol}</Table.Cell>
								<Table.Cell class='capitalize'>{contract.type.toLowerCase()}</Table.Cell>
								<Table.Cell>{contract.fulfilled ? 'Fulfilled' : contract.accepted ? 'Accepted' : 'Unaccepted'}</Table.Cell>
								<Table.Cell>{contract.fulfilled ? 0 : contract.accepted ? contract.terms.payment.onFulfilled : contract.terms.payment.onAccepted + contract.terms.payment.onFulfilled}</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
