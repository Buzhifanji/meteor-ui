<svelte:options />

<script lang="ts">
  import { ariaDisabled, roleButton } from '@one-ui/one-aria';
  import {
    beforeUpdate,
    get_current_component,
    onMount,
  } from 'svelte/internal';
  import {  } from './space.interface';
</script>

<slot />

<style>
  :host {
    font-family: var(
      --one-font-family,
      'Helvetica Neue',
      Helvetica,
      'PingFang SC',
      'Hiragino Sans GB',
      'Microsoft YaHei',
      '微软雅黑',
      Arial,
      sans-serif
    );
    font-size: var(--one-font-size, 14px);
  }
  slot {
    display: contents;
  }
</style>
