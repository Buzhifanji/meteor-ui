<svelte:options tag="one-button" />

<script lang="ts">
  import { roleButton } from '@one-ui/one-aria';
  import {
    buttonActiveBackgroundColor,
    buttonActiveBorderColor,
    buttonBackgroundColor,
    buttonBorderColor,
    buttonBoxShadow,
    buttonColor,
    buttonHoverBackgroundColor,
    buttonHoverBorderColor,
    getKey,
    updateStyleAttribute,
  } from '@one-ui/one-utils';

  export let color: string | null = null;
  export let type: string | null = null;

  let cssVarStyles = `
  ${buttonColor};
  ${buttonBackgroundColor};
  ${buttonBorderColor};
  ${buttonBoxShadow};
  ${buttonHoverBackgroundColor};
  ${buttonHoverBorderColor};
  ${buttonActiveBackgroundColor};
  ${buttonActiveBorderColor};`;

  function updateType(type: string) {
    if (type) {
      const fn = (
        color: string,
        shadow: string,
        bg: string,
        border: string,
      ) => {
        return `
      ${getKey(buttonColor)}: ${color};
      ${getKey(buttonBoxShadow)}:0 2px 6px ${shadow} ;
      ${getKey(buttonBackgroundColor)}: ${bg};
      ${getKey(buttonBorderColor)}: ${border}`;
      };
      switch (type) {
        case 'primary':
          return fn('#fff', '#acb5f6', '#6777ef', '#6777ef');
        case 'danger':
          return fn('#fff', '#fd9b96', '#e91e63', '#e91e63');
        case 'info':
          return fn('#fff', '#82d3f8', '#2196f3', '#2196f3');
        case 'warning':
          return fn('#fff', '#ffc473', '#ffc107', '#ffc107');
        case 'success':
          return fn('#fff', '#a8f5b4', '#63ed7a', '#63ed7a');
      }
    } else {
      return cssVarStyles;
    }
  }
  $: style = updateType($$props.type);

  $: {
    const { color } = $$props;
    updateStyleAttribute('color', color);
  }
</script>

<div class="one-btn" {style}>
  <button role={roleButton} />
  <slot />
</div>

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
    width: var(--one-width, initial);
    height: var(--one-height, 34px);
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
    border: 1px solid var(--one-button-border-color);
    font-size: var(--one-font-size, 14px);
    box-shadow: var(--one-button-box-shadow);
    color: var(--one-button-color);
    background-color: var(--one-button-background-color);
    border-color: var(--one-button-border-color);
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
    /* height: 100%; */
    padding: 0;
    user-select: none;
    cursor: pointer;
  }
  :host([disabled]),
  :host([loading]) {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.6;
  }
  :host([disabled]:not([type])) {
    background: rgba(0, 0, 0, 0.1);
  }
  :host(:not([disabled]):hover),
  :host(:not([disabled]):focus) {
    border-color: rgba(0, 0, 0, 0.25);
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 12px;
  }
  :host(:not([disabled]):active) {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0em);
  }

  :host(:not([disabled]):hover) {
    border-color: transparent;
    transform: translateY(-0.25px);
  }

  :host([ghost]) {
    background-color: var(--one-background-color, #fff);
  }
  :host([ghost][type='danger']) {
    color: var(--one-danger-background-color, #e91e63);
  }
  :host([ghost][type='primary']) {
    color: var(--one-primary-background-color, #6777ef);
  }
  :host([ghost][type='info']) {
    color: var(--one-info-background-color, #2196f3);
  }
  :host([ghost][type='warning']) {
    color: var(--one-warning-background-color, #ffc107);
  }
  :host([ghost][type='success']) {
    color: var(--one-success-background-color, #63ed7a);
  }

  :host([dashed]) {
    border-style: dashed;
    background-color: var(--one-background-color, #fff);
  }
  :host([dashed][type='primary']) {
    color: var(--one-primary-background-color, #6777ef);
  }
</style>
