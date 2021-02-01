import { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../pages';
import '../../styles/main.scss';
import Loader from 'react-loader-spinner';

const AsyncHomePage = lazy(
  () => import('../../pages/Home' /* webpackChunkName: "HomePage" */)
);

const AsyncErrorPage = lazy(
  () => import('../../pages/ErrorPage' /* webpackChunkName: "ErrorPage" */)
);

const AsyncMentorPage = lazy(
  () => import('../../pages/Mentor' /* webpackChunkName: "MentorPage" */)
);

const AsyncFavoritesPage = lazy(
  () => import('../../pages/Favorites' /* webpackChunkName: "FavoritesPage" */)
);

const AsyncSearchPage = lazy(
  () => import('../../pages/SearchPage') /* webpackChunkName: "SearchPage" */
);

const App = (): JSX.Element => {
  return (
    <>
      <Suspense
        fallback={
          <div className="loader">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        }
      >
        <Switch>
          <Route path={routes.home} exact component={AsyncHomePage} />
          <Route path={routes.error} component={AsyncErrorPage} />
          <Route
            path={`${routes.mentor}/:mentorId`}
            component={AsyncMentorPage}
          />
          <Route path={routes.favorites} component={AsyncFavoritesPage} />
          <Route path={routes.search} component={AsyncSearchPage} />
          <Redirect to={routes.error} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
