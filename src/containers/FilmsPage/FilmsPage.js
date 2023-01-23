import {useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';

import { API_FILMS } from '../../constans/constans';
import { getFilmsIMG, getFilmsID} from '../../utils/getID';
import { widthErrorApi } from '../../hoc-helpers/withErrorApi';
import PlanetsList from './FilmsPage/FilmsList';

import s from './FilmsPage.module.scss';

const FilmsPage = ({setErrorApi}) => {
    const [films, setFilms] = useState(null);

    const getResourse = async (url) =>{
    const res = await getApiResource(url);
    if (res){
                const filmList = res.results.map(({title,url}) =>{
                    const id = getFilmsID(url);
                    let img = getFilmsIMG(id)
                    return{ title, id, img};
                })
            setFilms(filmList);
            setErrorApi(false);
        } else{
            setErrorApi(true);

        }
    }
    
    useEffect(() => {
        getResourse(API_FILMS) 
    },[])
    return (
        <div className={s.main__content}>
        <h2 className={s.header}>NAVIGATION</h2>
        <div className={s.nav}>

        </div>
        {films && <PlanetsList films={films}/>}

        </div>
    )
}
export default widthErrorApi(FilmsPage);