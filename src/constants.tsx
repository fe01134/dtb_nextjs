import { Icon } from '@iconify/react';

import { SideNavItem } from "../src/types"

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Things To Do',
    path: '/things_to_do',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/projects' },
      { title: 'Web Design', path: '/things_to_do/web-design' },
      { title: 'Graphic Design', path: '/things_to_do/graphic-design' },
    ],
  },
  {
    title: 'Events',
    path: '/events',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Places',
    path: '/places',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/places/account' },
      { title: 'Privacy', path: '/places/privacy' },
    ],
  },
  {
    title: 'About Us',
    path: '/about',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
  {
    title: 'My Plans',
    path: '/my_plans',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
