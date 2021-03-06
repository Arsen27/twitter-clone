import { IconSources } from '../../../../Base/Icon';

export type TMenuItem = {
  text: string;
  path: string;
  icon: {
    name: string;
    source?: IconSources;
  };
};
