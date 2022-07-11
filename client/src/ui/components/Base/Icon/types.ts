export enum IconSources {
  Bootstrap = 'bootstrap',
  Custom = 'custom',
}

export enum IconTypes {
  Filled = 'filled',
  Outlined = 'outlined',
}

export type TCustomIconProps = {
  style: any;
  type: IconTypes;
}
