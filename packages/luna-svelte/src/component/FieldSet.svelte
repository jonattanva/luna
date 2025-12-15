<script lang="ts">
  import Legend from './Legend.svelte'
  import Group from './Group.svelte'

  export let title = ''
  export let description = ''
</script>

{#if !title && !description}
  <Group>
    <slot />
  </Group>
{:else}
  <fieldset data-slot="field-set" class="flex flex-col gap-6">
    <Legend {title} {description} />
    <Group>
      <slot />
    </Group>
  </fieldset>
{/if}
