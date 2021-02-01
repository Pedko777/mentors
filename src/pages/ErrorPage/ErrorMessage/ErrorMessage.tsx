import { Link } from 'react-router-dom';
import routes from '../..';

const ErrorMessage = (): JSX.Element => {
  return (
    <div className="error">
      <div className="error__title">
        <h1 className="error__title-text">404</h1>
      </div>
      <div className="error__desc">
        <p className="error__desc-text">Something went wrong :(</p>
      </div>
      <div className="error__link">
        <Link to={routes.home} className="error__link-text">
          Home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorMessage;
