import { useHref, useNavigate } from 'react-router-dom';
import { getApiResource } from '../../../../utils/network';
import { useEffect } from 'react';
import { API_SWAPI_FILM} from '../../../../constans/constans';
import { useState } from 'react';
import { widthErrorApi } from '../../../../hoc-helpers/withErrorApi';
import {  getFilmsIMG} from '../../../../utils/getID';
import s from './FilmPage.module.scss';

const FilmPage = ({setErrorApi}) => {
    const [personInfo, setPersoInfo] = useState(null);
    const [personName, setPersoName] = useState(null);
    const [perosnIMG, setPersonIMG] = useState(null);
    const id = Number(useHref().match(/\d/)[0]);
    const navigate = useNavigate();
    useEffect(() =>{
        (async () =>{
            const res = await getApiResource(API_SWAPI_FILM +'/' + id + '/')
            if (res){
                console.log(res)
                setErrorApi(false);
                setPersoInfo([                    
                    {title:'Release date', data:res.release_date},
                    {title:'Director', data:res.director},
                    {title:'Producer', data:res.producer},
                    {title:'Opening crawl', data:res.opening_crawl},

                ])
                setPersoName(res.title);

                setPersonIMG(getFilmsIMG(id))
            } else{
                setErrorApi(true)
            }
        })();
    }, [])

    return(
        <div className={s.person__container}>
            <div className={s.back}>
                <a href="#" onClick={() => navigate(-1)}>
                    <img src="https://www.freeiconspng.com/uploads/return-button-png-2.png" alt="back" />
                </a>                
            </div>
            <div className={s.person}>
                <div className={s.person__img__container}>
                    <img src={perosnIMG} alt={personName} />
                </div>
                {personName && (
                    <div className={s.person__name}>
                        <h2>{personName}</h2>                    
                            {personInfo && (
                                <ul>
                                    {personInfo.map(({title, data}) =>{            
                                        return <li key={title} className={s.person__data}><span>{title}</span> : <span>{data}</span></li>            
                                            })}
                                </ul>  
                            )}                        
                </div>
                )}

            </div>
        </div>
    )
}
export default widthErrorApi(FilmPage) ;
