<svelte:options tag="one-button" />

<script lang="ts">
  import { roleButton } from '@one-ui/one-aria';

  export let color: string | null = null; // 自定义颜色
  export let type: string | null = null; // 类型default、primary、info、success、warning 和 danger。
  export let ghost: boolean | null | undefined = undefined; // 是否透明背景
  export let disabled: boolean | null = false; // 是否禁用
  export let loading: string | null = null; // 是否loading
  export let dashed: string | null = null; // 是否设置虚线

  let style = '';

  function setColor({ color, ghost }: SvelteAllProps) {
    if (color) {
      if (ghost !== undefined) {
        style = `
        --one-button-border-color: ${color};
        --one-button-color: ${color}; 
        --one-button-color-pressed: ${color};
        --one-button-border-color-pressed: ${color}; 
        `;
      } else {
        style = `
        --one-button-border-color: ${color}; 
        --one-button-color-pressed: #fff; 
        --one-button-border-color-pressed: ${color}; 
        --one-button-color: #fff;
        --one-button-background-color: ${color}; 
        `;
      }
    }
  }

  $: {
    setColor($$props);
  }
</script>

<button
  class="one-btn"
  role={roleButton}
  {type}
  {loading}
  {ghost}
  {disabled}
  {color}
  {dashed}
  {style}
>
  <slot />
</button>

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
    width: var(--one-width, initial);
    height: var(--one-height, 34px);
    contain: layout style;
    display: inline-flex;
  }
  .one-btn {
    display: inherit;
    width: inherit;
    height: inherit;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    user-select: none;
    line-height: 1;
    padding: var(--one-padding, 0 1em);
    border: 1px solid var(--one-button-border-color, #d9d9d9);
    font-size: var(--one-font-size, 14px);
    box-shadow: var(--one-button-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.06));
    color: var(--one-button-color, #2c3136);
    background-color: var(--one-button-background-color, #fff);
    border-color: var(--one-button-border-color, #d9d9d9);
    border-radius: var(--one-border-radius, 00.25em);
    transition: color 0.3s var(--one-bezier, cubic-bezier(0.4, 0, 0.2, 1)),
      background-color 0.3s var(--one-bezier, cubic-bezier(0.4, 0, 0.2, 1)),
      opacity 0.3s var(--one-bezier, cubic-bezier(0.4, 0, 0.2, 1)),
      border-color 0.3s var(--one-bezier, cubic-bezier(0.4, 0, 0.2, 1));
  }

  :host([disabled]),
  :host([loading]),
  .one-btn[disabled],
  .one-btn[loading] {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.6;
  }
  .one-btn:not([disabled]):active,
  .one-btn:not([disabled]):hover {
    transform: translateY(0.06em);
    /* box-shadow: none; */
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 12px;
  }
  .one-btn:not([disabled]):not([type]):active,
  .one-btn:not([disabled]):not([type]):hover {
    color: var(--one-button-color-pressed, #6777ef);
    border-color: var(--one-button-border-color-pressed, #6777ef);
  }
  .one-btn:not([disabled]):hover {
    opacity: 0.8;
  }

  .one-btn[type='primary'] {
    box-shadow: var(--one-button-box-shadow, #acb5f6);
    color: var(--one-button-color, #fff);
    background-color: var(--one-button-background-color, #6777ef);
    border-color: var(--one-button-border-color, #6777ef);
  }
  .one-btn[type='danger'] {
    box-shadow: var(--one-button-box-shadow, #fd9b96);
    color: var(--one-button-color, #fff);
    background-color: var(--one-button-background-color, #e91e63);
    border-color: var(--one-button-border-color, #e91e63);
  }
  .one-btn[type='info'] {
    box-shadow: var(--one-button-box-shadow, #82d3f8);
    color: var(--one-button-color, #fff);
    background-color: var(--one-button-background-color, #2196f3);
    border-color: var(--one-button-border-color, #2196f3);
  }
  .one-btn[type='warning'] {
    box-shadow: var(--one-button-box-shadow, #ffc473);
    color: var(--one-button-color, #fff);
    background-color: var(--one-button-background-color, #ffc107);
    border-color: var(--one-button-border-color, #ffc107);
  }
  .one-btn[type='success'] {
    box-shadow: var(--one-button-box-shadow, #a8f5b4);
    color: var(--one-button-color, #fff);
    background-color: var(--one-button-background-color, #63ed7a);
    border-color: var(--one-button-border-color, #63ed7a);
  }

  .one-btn[ghost] {
    background-color: var(--one-button-background-color, #fff);
  }
  .one-btn[ghost][type='danger'],
  .one-btn[dashed][type='danger'] {
    color: var(--one-button-color, #e91e63);
  }
  .one-btn[ghost][type='primary'],
  .one-btn[dashed][type='primary'] {
    color: var(--one-button-color, #6777ef);
  }
  .one-btn[ghost][type='info'],
  .one-btn[dashed][type='info'] {
    color: var(--one-button-color, #2196f3);
  }
  .one-btn[ghost][type='warning'],
  .one-btn[dashed][type='warning'] {
    color: var(--one-button-color, #ffc107);
  }
  .one-btn[ghost][type='success'],
  .one-btn[dashed][type='success'] {
    color: var(--one-button-color, #63ed7a);
  }

  .one-btn[dashed] {
    border-style: dashed;
    background-color: var(--one-button-background-color, #fff);
  }

  .one-btn[color][type] {
    color: var(--one-button-color, #63ed7a);
  }
</style>
