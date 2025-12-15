<script lang="ts">
  export let name = ''
  export let required = false
</script>

<label
  data-slot="field-label"
  class="flex w-fit items-center gap-2 text-sm leading-snug font-medium select-none"
  for={name}
>
  <slot />
  {#if !required}
    <span class="text-sm text-slate-600 dark:text-slate-400"> (Optional) </span>
  {/if}
</label>
