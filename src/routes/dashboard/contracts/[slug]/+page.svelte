<script lang="ts">
    export let data;
    const timeToAccept = new Date(data.contract.deadlineToAccept);
    import * as Card from '$lib/components/ui/card/index.js';
</script>

<div class="flex min-h-screen container flex-col gap-4 md:gap-8">
    <div class="grid md:grid-cols-2 gap-4 md:gap-8">
        <div class="flex flex-col gap-4 md:gap-8">
            <div>
                <p class="text-sm text-muted-foreground">Contract ID</p>
                <p class="text-lg font-bold">{data.contract.id}</p>
            </div>
            <div>
                <p class="text-sm text-muted-foreground">Status</p>
                <p class="text-lg font-bold">{data.contract.fulfilled ? 'Fulfilled' : data.contract.accepted ? 'Accepted' : 'Unaccepted'}</p>
            </div>
            <div>
                <p class="text-sm text-muted-foreground">Deadline to Accept</p>
                <p class="text-lg font-bold">{new Date(data.contract.deadlineToAccept).toLocaleString()}</p>
            </div>
            <div>
                <p class="text-sm text-muted-foreground">Faction</p>
                <p class="text-lg font-bold">{data.contract.factionSymbol}</p>
            </div>
            <div>
                <p class="text-sm text-muted-foreground">Type</p>
                <p class="text-lg font-bold">{data.contract.type}</p>
            </div>
        </div>
        <div class="flex flex-col gap-4 md:gap-8">
            <p class="text-sm text-muted-foreground">Contract Deliverables</p>
            {#if data.contract.terms.deliver}
                {#each data.contract.terms.deliver as item}
                <Card.Root>
                    <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <Card.Title class="font-medium">{item.tradeSymbol}</Card.Title>
                    </Card.Header>
                    <Card.Content class='flex flex-col gap-1 pb-4 pt-2'>
                        <p class="text-muted-foreground text-sm">Destination : <span class="text-primary">{item.destinationSymbol}</span></p>
                        <p class="text-muted-foreground text-sm">Count : <span class="text-primary">{item.unitsFulfilled}/{item.unitsRequired}</span></p> 
                    </Card.Content>
                </Card.Root>
                {/each}            
            {/if}
        </div>
    </div>
</div>