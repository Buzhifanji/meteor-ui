<svelte:options />

<script lang="ts">
  import { updateAttribute } from '@one-ui/one-utils';
  import { TextColor } from './text.interface';

  export let color: TextColor | null = null; // 类型颜色
  export let row: number = 0; // 多少行才会换行

  function setRow({ row }: SvelteAllProps) {
    const style = { '-webkit-line-clamp': row };
    updateAttribute(style, row);
  }

  $: {
    setRow($$props);
  }
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
    color: var(--one-text-color, #2c3136);
  }
  slot {
    display: contents;
  }
  :host([row]) {
    display: -webkit-inline-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :host([color='primary']) {
    color: var(--one-text-color, #6777ef);
  }
  :host([color='success']) {
    color: var(--one-text-color, #63ed7a);
  }
  :host([color='info']) {
    color: var(--one-text-color, #2196f3);
  }
  :host([color='warning']) {
    color: var(--one-text-color, #ffc107);
  }
  :host([color='danger']) {
    color: var(--one-text-color, #e91e63);
  }
</style>
