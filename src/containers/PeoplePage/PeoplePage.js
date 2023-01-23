import {useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constans/constans';
import { getPeopleID, getPeopleIMG, getPeoplePageID} from '../../utils/getID';
import { widthErrorApi } from '../../hoc-helpers/withErrorApi';
// import PeopleList from './PeopleList/PeopleList';
import Loading from '../Loading/Loading';
import { useQueryParams } from '../../hooks/useQueryParams';
import s from './PeoplePage.module.scss';

const PeopleList = lazy(() => import ('./PeopleList/PeopleList') );



const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState('1');

    const handleChangeNext = () =>  getResourse(nextPage);
    const handleChangePrev = () =>  getResourse(prevPage);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResourse = async (url) =>{
    const res = await getApiResource(url);

    if (res){
                const peopleList = res.results.map(({name,url, gender}) =>{
                    const id = getPeopleID(url);
                    const img = getPeopleIMG(id);
                    return{ name, id, img, gender};
                })
            setPeople(peopleList);
            setPrevPage(res.previous);
            setNextPage(res.next);
            setErrorApi(false);
            setCounterPage(getPeoplePageID(url))
        } else{
            setErrorApi(true);

        }

    }
    
    useEffect(() => {
        getResourse(API_PEOPLE + queryPage) 
    },[])
    return (
        <div className={s.main__content}>
        <h2 className={s.header}>NAVIGATION</h2>
        <div className={s.nav}>
            <Link to={'/people/?page=' + (counterPage - 1)}>
            <button onClick={handleChangePrev} disabled={!prevPage}>Previos</button>
            </Link>
            <Link to={'/people/?page=' + (counterPage + 1)}>
            <button onClick={handleChangeNext} disabled={!nextPage}>Next</button>
            </Link>
        </div>
        {people && (
            <Suspense fallback={<Loading/>}>
                <PeopleList people={people}/>
            </Suspense>
        )}

        </div>
    )
}
export default widthErrorApi(PeoplePage);