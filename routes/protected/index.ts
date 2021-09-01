import {Route} from '../type';
import ProfileScreen from '../../screens/profile';

const PROTECTED: Route[] = [
  {
    name: 'Profile',
    component: ProfileScreen,
  },
];

export default PROTECTED;
