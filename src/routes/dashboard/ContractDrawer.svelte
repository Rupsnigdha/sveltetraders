

<script lang="ts">
    export let data;
    import * as Drawer from "$lib/components/ui/drawer";
    import { Button } from "$lib/components/ui/button";
</script>
   
  <Drawer.Root open={data.isOpen}>
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
        <Drawer.Description>This action cannot be undone.</Drawer.Description>
      </Drawer.Header>
      <Drawer.Footer>
        <Button>Submit</Button>
        <Drawer.Close>Cancel</Drawer.Close>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Root>