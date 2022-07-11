import { IconSources } from '../../../../components/Base/Icon';
import { TMenuItem } from './types';

const items: TMenuItem[] = [
  {
    text: 'Home',
    icon: { name: 'house' },
    path: 'home',
  },
  {
    text: 'Explore',
    icon: { name: 'hash', source: IconSources.Custom },
    path: 'home',
  },
  {
    text: 'Notifications',
    icon: { name: 'bell' },
    path: 'home',
  },
  {
    text: 'Messages',
    icon: { name: 'envelope' },
    path: 'home',
  },
  {
    text: 'Bookmarks',
    icon: { name: 'bookmark' },
    path: 'home',
  },
  {
    text: 'Lists',
    icon: { name: 'card-list' },
    path: 'home',
  },
  {
    text: 'Profile',
    icon: { name: 'person' },
    path: 'home',
  },
  {
    text: 'More',
    icon: { name: 'three-dots' },
    path: 'home',
  },
];

export default items;
