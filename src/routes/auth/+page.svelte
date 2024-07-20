<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Form from '$lib/components/ui/form';
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { signUpFormSchema, type SignUpFormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data;
	const signUpForm = superForm(data.signUpForm, {
		validators: zodClient(signUpFormSchema),
		onResult(el) {
			console.log('123')
		},
		onError(el) {
			console.log('345')
		}
	});
	const { form: signUpFormData, enhance } = signUpForm;
	let formAction = '/register'
</script>

<div class="flex h-screen items-center justify-center">
	<Tabs.Root value="signup" class="w-[400px]">
		<Tabs.List class="grid w-full grid-cols-2">
			<Tabs.Trigger value="login">Log In</Tabs.Trigger>
			<Tabs.Trigger value="signup">Sign Up</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="login">
			<Card.Root>
				<Card.Header>
					<Card.Title>Log In</Card.Title>
					<Card.Description>Log in to your SpaceTraders account here.</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
					<div class="space-y-1">
						<Label for="name">Name</Label>
						<Input id="name" value="Pedro Duarte" />
					</div>
					<div class="space-y-1">
						<Label for="username">Username</Label>
						<Input id="username" value="@peduarte" />
					</div>
				</Card.Content>
				<Card.Footer>
					<Button>Log In</Button>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
		<Tabs.Content value="signup">
			<Card.Root>
				<form method="POST" action="?/register" use:enhance>
				<Card.Header>
					<Card.Title>Sign Up</Card.Title>
					<Card.Description>Sign up for a new SpaceTraders account here.</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
						<Form.Field form={signUpForm} name="symbol">
							<Form.Control let:attrs>
								<Form.Label>Username</Form.Label>
								<Input {...attrs} bind:value={$signUpFormData.symbol} />
							</Form.Control>
							<Form.Description>This is your public display name.</Form.Description>
							<Form.FieldErrors />
						</Form.Field>
						<Form.Field form={signUpForm} name="faction">
							<Form.Control let:attrs>
								<Form.Label>Faction</Form.Label>
								<DropdownMenu.Root>
									<DropdownMenu.Trigger asChild let:builder class="w-full">
									  <Button variant="outline" builders={[builder]} class="w-full">{$signUpFormData.faction}</Button>
									</DropdownMenu.Trigger>
									<DropdownMenu.Content class="w-[350px]">
									  <DropdownMenu.Label>Choose your starting faction</DropdownMenu.Label>
									  <DropdownMenu.Separator />
									  <DropdownMenu.RadioGroup bind:value={$signUpFormData.faction}>
										{#each data.factions as faction}
											<DropdownMenu.RadioItem value={faction.symbol}>{faction.name}</DropdownMenu.RadioItem>
										{/each}
									  </DropdownMenu.RadioGroup>
									</DropdownMenu.Content>
								  </DropdownMenu.Root>
							</Form.Control>
							<Form.Description>This is your starting faction.</Form.Description>
							<Form.FieldErrors />
						</Form.Field>

				</Card.Content>
				<Card.Footer>
					<Button type='submit'>Sign Up</Button>
				</Card.Footer>
				</form>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
</div>