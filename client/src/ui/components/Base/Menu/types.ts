import { IconSources } from '../Icon';

export type TMenuItem = {
  text: string;
  path: string;
  icon: {
    name: string;
    source?: IconSources;
  };
};
