import React from 'react';
import { Link } from 'react-router-dom';
import { ScreenRoutes } from 'helpers/general/constants';

interface IPageNotFoundProps {
  hasHomeNavigation?: boolean;
}

const PageNotFoundView: React.FC<IPageNotFoundProps> = ({ hasHomeNavigation = false }) => {
  return (
    <div>
      <p>Could not find corresponding page.</p>
      {hasHomeNavigation && <Link to={ScreenRoutes.HOME}>Click to return to home.</Link>}
    </div>
  );
};

export default PageNotFoundView;
