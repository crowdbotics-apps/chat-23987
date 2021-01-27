import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed19197337Navigator from '../features/Feed19197337/navigator';
import Dashboard118197336Navigator from '../features/Dashboard118197336/navigator';
import Settings195304Navigator from '../features/Settings195304/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Feed19197337: { screen: Feed19197337Navigator },
Dashboard118197336: { screen: Dashboard118197336Navigator },
Settings195304: { screen: Settings195304Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
