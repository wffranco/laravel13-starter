declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

type ComponentSlots = {
  [name: string]: Slot | undefined;
  default?: (() => VNode[]) | undefined;
};
