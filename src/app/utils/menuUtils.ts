import { ixidocs, ixiscope, Routes, Section } from '@utils/constants';

export interface IMenu {
  title: string;
  href: string;
}

export const learnMenu: IMenu[] = [
  {
    title: 'Technology',
    href: Routes.TECHNOLOGY,
  },
  {
    title: 'Ixian DLT',
    href: `${Routes.TECHNOLOGY}#${Section.IXIAN_DLT}`,
  },
  {
    title: 'Ixian S2 Network',
    href: `${Routes.TECHNOLOGY}#${Section.IXIAN_S2_NETWORK}`,
  },
  {
    title: 'IXI Token',
    href: `${Routes.TECHNOLOGY}#${Section.IXI_TOKEN}`,
  },
  {
    title: 'IXI Mining',
    href: `${Routes.GET_INVOLVED}#${Section.IXI_MINING}`,
  },
];

export const resourcesMenu: IMenu[] = [
  {
    title: 'Docs',
    href: ixidocs,
  },
  {
    title: 'White Paper',
    href: ixidocs,
  },
  {
    title: 'Downloads',
    href: `${Routes.GET_INVOLVED}#${Section.RESOURCES}`,
  },
  {
    title: 'ixiscope',
    href: ixiscope,
  },
];

export const getInvolvedMenu: IMenu[] = [
  {
    title: 'Developers Hub',
    href: Routes.BUILD,
  },
  {
    title: 'Become a Partner',
    href: `${Routes.ABOUT_US}#${Section.PARTNERSHIPS}`,
  },
  {
    title: 'Join Community',
    href: Routes.GET_INVOLVED,
  },
];
