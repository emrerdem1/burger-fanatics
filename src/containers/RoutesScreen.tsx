import React from 'react';
import PageNotFoundView from 'components/common/PageNotFoundView';
import { Route, Routes } from 'react-router-dom';
import { ScreenRoutes } from '../helpers/general/constants';
import LayoutView from 'components/common/LayoutView';
import RestaurantsScreen from './restaurants/RestaurantsScreen';
import HomeView from 'components/home/HomeView';

const RoutesScreen: React.FC = () => {
  return (
    <Routes>
      <Route path={ScreenRoutes.HOME} element={<LayoutView />}>
        <Route index element={<HomeView />} />
        <Route path={ScreenRoutes.BURGER_RESTAURANTS} element={<RestaurantsScreen />} />
        <Route path={ScreenRoutes.NOT_FOUND} element={<PageNotFoundView hasHomeNavigation />} />
      </Route>
    </Routes>
  );
};

export default RoutesScreen;
