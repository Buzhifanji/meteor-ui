<svelte:options />

<script lang="ts">
  import { ariaDisabled, roleButton } from '@one-ui/one-aria';
  import { updateAttribute } from '@one-ui/one-utils';
  import {
    beforeUpdate,
    get_current_component,
    onMount,
  } from 'svelte/internal';
  import { ButtonSize, ButtonType } from './interface';

  export let color: string | null = null; // 自定义颜色
  export let size: ButtonSize = 'medium'; // 自定义颜色
  export let type: ButtonType | null = null; // 类型default、primary、info、success、warning 和 danger。
  export let ghost: boolean | null | undefined = undefined; // 是否透明背景
  export let disabled: boolean | null = false; // 是否禁用
  export let loading: string | null = null; // 是否loading
  export let dashed: string | null = null; // 是否设置虚线
  export let circle: string | null = null; // 圆角
  export let attrType: string = 'button';

  const root = get_current_component();

  onMount(() => {
    root.setAttribute('role', roleButton);
    setAriaDisabled();
  });
  beforeUpdate(() => {
    if (root.hasAttribute(ariaDisabled)) {
      setAriaDisabled();
    }
  });
  function setAriaDisabled() {
    const disable = $$props.disabled ? true : false;
    root.setAttribute(ariaDisabled, disable);
  }
  function setColor({ color, ghost }: SvelteAllProps) {
    let style = {};
    if (ghost !== undefined) {
      style = {
        '--one-button-border-color': color,
        '--one-button-color': color,
        '--one-button-color-pressed': color,
        '--one-button-border-color-pressed': color,
      };
    } else {
      style = {
        '--one-button-border-color': color,
        '--one-button-color': color,
        '--one-button-color-pressed': color,
        '--one-button-border-color-pressed': color,
      };
    }
    updateAttribute(style, color);
  }

  $: {
    setColor($$props);
  }
</script>

<button {disabled} />
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
    display: inline-flex;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding: 0.6em 1em;
    width: var(--one-width, initial);
    height: var(--one-height, initial);
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
  button {
    background: none;
    outline: 0;
    border: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    user-select: none;
    cursor: unset;
  }
  slot {
    display: contents;
  }

  :host([disabled]),
  :host([loading]) {
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
  }
  :host([disabled]) button,
  :host([loading]) button {
    /* pointer-events: all; */
    cursor: not-allowed;
    /* pointer-events: auto; */
  }
  /* :host([disabled]) span,
  :host([loading]) span {
    cursor: not-allowed;
  } */
  :host(:not([disabled]):active),
  :host(:not([disabled]):hover) {
    transform: translateY(0.06em);
    /* box-shadow: none; */
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 12px;
  }
  :host(:not([disabled]):not([type]):active),
  :host(:not([disabled]):not([type]):hover) {
    color: var(--one-button-color-pressed, #6777ef);
    border-color: var(--one-button-border-color-pressed, #6777ef);
  }
  :host(:not([disabled]):hover) {
    opacity: 0.8;
  }

  :host([type='primary']) {
    box-shadow: var(--one-button-box-shadow, #acb5f6);
    color: var(--one-button-color, #fff);
    background-color: var(--one-button-background-color, #6777ef);
    border-color: var(--one-button-border-color, #6777ef);
  }
  :host([type='danger']) {
    box-shadow: var(--one-button-box-shadow, #fd9b96);
    color: var(--one-button-color, #fff);
    background-color: var(--one-button-background-color, #e91e63);
    border-color: var(--one-button-border-color, #e91e63);
  }
  :host([type='info']) {
    box-shadow: var(--one-button-box-shadow, #82d3f8);
    color: var(--one-button-color, #fff);
    background-color: var(--one-button-background-color, #2196f3);
    border-color: var(--one-button-border-color, #2196f3);
  }
  :host([type='warning']) {
    box-shadow: var(--one-button-box-shadow, #ffc473);
    color: var(--one-button-color, #fff);
    background-color: var(--one-button-background-color, #ffc107);
    border-color: var(--one-button-border-color, #ffc107);
  }
  :host([type='success']) {
    box-shadow: var(--one-button-box-shadow, #a8f5b4);
    color: var(--one-button-color, #fff);
    background-color: var(--one-button-background-color, #63ed7a);
    border-color: var(--one-button-border-color, #63ed7a);
  }

  :host([ghost]) {
    background-color: var(--one-button-background-color, #fff);
  }
  :host([ghost][type='danger']),
  :host([dashed][type='danger']) {
    color: var(--one-button-color, #e91e63);
  }
  :host([ghost][type='primary']),
  :host([dashed][type='primary']) {
    color: var(--one-button-color, #6777ef);
  }
  :host([ghost][type='info']),
  :host([dashed][type='info']) {
    color: var(--one-button-color, #2196f3);
  }
  :host([ghost][type='warning']),
  :host([dashed][type='warning']) {
    color: var(--one-button-color, #ffc107);
  }
  :host([ghost][type='success']),
  :host([dashed][type='success']) {
    color: var(--one-button-color, #63ed7a);
  }

  :host([dashed]) {
    border-style: dashed;
    background-color: var(--one-button-background-color, #fff);
  }

  :host([color][type]) {
    color: var(--one-button-color, #63ed7a);
  }

  :host([circle]) {
    border-radius: 3em;
  }

  :host([size='mini']) {
    padding: 0.2em 0.6em;
    font-size: 12px;
  }
  :host([size='small']) {
    padding: 0.4em 0.8em;
    font-size: 14px;
  }
  :host([size='medium']) {
    padding: 0.6em 1em;
    font-size: 14px;
  }
  :host([size='big']) {
    padding: 1em 2em;
    font-size: 1.2em;
  }
</style>
