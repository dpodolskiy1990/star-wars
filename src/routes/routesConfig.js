import HomePage from "../containers/HomePage/HomePage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";
import PersonPage from "../containers/PeoplePage/PeopleList/PersonPage/PersonPage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";
import PlanetsPage from "../containers/PlanetsPage/PlanetsPage";
import PlanetPage from "../containers/PlanetsPage/PlanetsList/PlanetPage/PlanetPage";
import FilmsPage from "../containers/FilmsPage/FilmsPage";
import FilmPage from "../containers/FilmsPage/FilmsPage/FilmPage/FilmPage";
const routesConfig = [
    {
        path: '/',
        exact: true,
        element: <HomePage/>
    },
    {
        path: '/planets',
        exact: false,
        element: <PlanetsPage/>
    },
    {
        path: '/planets/:id',
        exact: false,
        element: <PlanetPage/>
    },
    {
        path: '/films',
        exact: false,
        element: <FilmsPage/>
    },
    {
        path: '/films/:id',
        exact: false,
        element: <FilmPage/>
    },
    {
        path: '/people',
        exact: false,
        element: <PeoplePage/>
    },
    {
        path: '/people/:id',
        exact: false,
        element: <PersonPage/>
    },
    {
        path: '*',
        exact: false,
        element: <NotFoundPage/>
    },
    {
        path: '/notfound',
        exact: true,
        element: <NotFoundPage/>
    },
]

export default routesConfig;
