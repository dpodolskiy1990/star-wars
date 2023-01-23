import {useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { getApiResource } from '../../utils/network';

import { API_PLANETS } from '../../constans/constans';
import { getPeoplePageID, getPlanetsID, getPlanetsIMG} from '../../utils/getID';
import { widthErrorApi } from '../../hoc-helpers/withErrorApi';
// import PlanetsList from './PlanetsList/PlanetsList';
import Loading from '../Loading/Loading';
import s from './PlanetsPage.module.scss';
const PlanetsList = lazy(() => import('./PlanetsList/PlanetsList') )

const PlanetsPage = ({setErrorApi}) => {
    const [planets, setPlanets] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState('1');

    const handleChangeNext = () =>  getResourse(nextPage);
    const handleChangePrev = () =>  getResourse(prevPage);


    const getResourse = async (url) =>{
    const res = await getApiResource(url);
    if (res){
                const planetsleList = res.results.map(({name,url}) =>{
                    const id = getPlanetsID(url);
                    let img = getPlanetsIMG(id)
                    return{ name, id, img};
                })
            setPlanets(planetsleList);
            setPrevPage(res.previous);
            setNextPage(res.next);
            setErrorApi(false);
            setCounterPage(getPeoplePageID(url))
        } else{
            setErrorApi(true);

        }
    }
    
    useEffect(() => {
        getResourse(API_PLANETS + 1) 
    },[])
    return (
        <div className={s.main__content}>
        <h2 className={s.header}>NAVIGATION</h2>
        <div className={s.nav}>
            <Link to={'/planets/?page=' + (counterPage - 1)}>
            <button onClick={handleChangePrev} disabled={!prevPage}>Previos</button>
            </Link>
            <Link to={'/planets/?page=' + (counterPage + 1)}>
            <button onClick={handleChangeNext} disabled={!nextPage}>Next</button>
            </Link>
        </div>
        {planets && (
            <Suspense fallback={<Loading/>}>
                <PlanetsList planets={planets}/>
            </Suspense>
        )}

        </div>
    )
}
export default widthErrorApi(PlanetsPage);