<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Form from '$lib/components/ui/form';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { loginFormSchema, signUpFormSchema } from './schema';
	import SuperDebug, { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';

	export let data;
	let accessToken: string = '';
	const signUpForm = superForm(data.signUpForm, {
		validators: zodClient(signUpFormSchema),
		onUpdate({ form }) {
			accessTokenDialogToggle();
			accessToken = form.message.accessToken;
		}
	});
	const loginForm = superForm(data.loginForm, {
		validators: zodClient(loginFormSchema),
		onUpdate({ form }) {
			accessTokenDialogToggle();
			accessToken = form.message.accessToken;
		}
	});
	const {
		form: signUpFormData,
		errors: signUpFormErrors,
		constraints: signUpFormConstraints,
		message: signUpFormMessage,
		enhance: signUpFormEnhance
	} = signUpForm;
	const { form: loginFormData, enhance: loginFormEnhance } = loginForm;

	let accessTokenDialogOpen = false;
	const accessTokenDialogToggle = () => {
		accessTokenDialogOpen = !accessTokenDialogOpen;
	};
	const handleTokenCopy = () => {
		navigator.clipboard.writeText(accessToken);
		console.log('Copied to clipboard');
		toast.success('Copied to clipboard', {
			description: 'Redirecting you to the dashboard'
		});
		setTimeout(() => {
			window.location.href = '/dashboard';
		}, 2000);
	};
</script>

<AlertDialog.Root open={accessTokenDialogOpen}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title
				>Please save your Access Token. You will not be able to log into SpaceTraders otherwise.</AlertDialog.Title
			>
			<AlertDialog.Description>
				<Input
					disabled
					type="email"
					placeholder="email"
					bind:value={accessToken}
					class="max-w-full"
				/>
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Action on:click={handleTokenCopy}>Copy</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
<div class="flex h-screen items-center justify-center">
	<Tabs.Root value="login" class="w-[400px]">
		<Tabs.List class="grid w-full grid-cols-2">
			<Tabs.Trigger value="login">Log In</Tabs.Trigger>
			<Tabs.Trigger value="signup">Sign Up</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="login">
			<Card.Root>
				<form method="POST" action="?/login" use:loginFormEnhance>
					<Card.Header>
						<Card.Title>Log In</Card.Title>
						<Card.Description>Log in to your SpaceTraders account here.</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-2">
						<Form.Field form={loginForm} name="token">
							<Form.Control let:attrs>
								<Form.Label>Access Token</Form.Label>
								<Input {...attrs} bind:value={$loginFormData.token} />
							</Form.Control>
							<Form.Description>This is your access token.</Form.Description>
							<Form.FieldErrors />
						</Form.Field>
					</Card.Content>
					<Card.Footer>
						<Button type="submit">Log In</Button>
					</Card.Footer>
				</form>
			</Card.Root>
		</Tabs.Content>
		<Tabs.Content value="signup">
			<Card.Root>
				<form method="POST" action="?/register" use:signUpFormEnhance>
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
										<Button variant="outline" builders={[builder]} class="block w-full text-left"
											>{$signUpFormData.faction}</Button
										>
									</DropdownMenu.Trigger>
									<DropdownMenu.Content class="w-[350px]">
										<DropdownMenu.Label>Choose your starting faction</DropdownMenu.Label>
										<DropdownMenu.Separator />
										<DropdownMenu.RadioGroup bind:value={$signUpFormData.faction}>
											{#each data.factions as faction}
												<DropdownMenu.RadioItem value={faction.symbol}
													>{faction.name}</DropdownMenu.RadioItem
												>
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
						<Button type="submit">Sign Up</Button>
					</Card.Footer>
				</form>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
</div>
