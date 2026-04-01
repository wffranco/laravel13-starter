import type { Directive, DirectiveBinding } from 'vue';

type Binding = DirectiveBinding<Value, 'lazy', any>;
type FocusDirective = Directive<HTMLElement, Value, 'lazy'>;
type Value = boolean | undefined;

/**
 * Focus the current element
 *
 * v-focus                      ---   Focus the current element inmediately
 * v-focus="<true|false>"       ---   Focus the current element when the value is true
 * v-focus.lazy="<true|false>"  ---   Focus the current element when the value is true and has toggled
 */
function focus(
  el: HTMLElement,
  { value, oldValue, modifiers: { lazy } }: Binding,
) {
  const shouldFocus = lazy
    ? value && !oldValue && oldValue !== undefined
    : value !== false;

  if (shouldFocus) {
    el.focus();
  }
}

const vFocus = {
  mounted: focus,
  updated: focus,
} satisfies FocusDirective;

export default vFocus;
