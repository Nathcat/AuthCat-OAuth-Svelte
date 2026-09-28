<script lang="ts">
  import type { PageProps } from "./$types.js";

  let { data }: PageProps = $props();
</script>

<pre>{JSON.stringify(data)}</pre>
