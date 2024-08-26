<script lang='ts'>
	import { goto } from '$app/navigation';
    export let data;
    import * as Table from '$lib/components/ui/table/index.js';
</script>

<div class="flex min-h-screen container flex-col gap-4 md:gap-8">
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
</div>