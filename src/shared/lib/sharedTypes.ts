import { IconNames } from '../ui';
import { routes } from '../constants';

export type Routes = (typeof routes)[keyof typeof routes];

export interface NavigationItem {
  route: Routes;
  text: string;
  iconName: IconNames;
}
