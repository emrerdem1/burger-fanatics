import React from 'react';
import { Link } from 'react-router-dom';
import { ScreenRoutes } from 'helpers/general/constants';

interface IPageNotFoundProps {
  hasHomeNavigation?: boolean;
}

const ErrorView: React.FC<IPageNotFoundProps> = ({ hasHomeNavigation = false }) => {
  return (
    <div>
      <p>An error occurred reading the data. Please inform the team if this continues.</p>
      {hasHomeNavigation && <Link to={ScreenRoutes.HOME}>Click to return to home.</Link>}
    </div>
  );
};

export default ErrorView;
