import { useHref, useNavigate } from 'react-router-dom';
import { getApiResource } from '../../../../utils/network';
import { useEffect } from 'react';
import { API_SWAPI_PLANET} from '../../../../constans/constans';
import { useState } from 'react';
import { widthErrorApi } from '../../../../hoc-helpers/withErrorApi';
import { getPlanetsIMG } from '../../../../utils/getID';
import s from './PlanetPage.module.scss';

const PlanetPage = ({setErrorApi}) => {
    const [personInfo, setPersoInfo] = useState(null);
    const [personName, setPersoName] = useState(null);
    const [perosnIMG, setPersonIMG] = useState(null);
    const id = Number(useHref().match(/\d/)[0]);
    const navigate = useNavigate();
    useEffect(() =>{
        (async () =>{
            const res = await getApiResource(API_SWAPI_PLANET +'/' + id + '/')
            if (res){
                setErrorApi(false);
                setPersoInfo([                    
                    {title:'Climate', data:res.climate},
                    {title:'Diameter', data:res.diameter},
                    {title:'Gravity', data:res.gravity},
                    {title:'Population', data:res.population},
                    {title:'Terrain', data:res.terrain},
                    {title:'Orbital period', data:res.orbital_period},  
                    {title:'Rotation period', data:res.rotation_period},  
                ])
                setPersoName(res.name);

                setPersonIMG(getPlanetsIMG(id))
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
                    <img src={perosnIMG}
                    onError={(e) => {e.target.src = 'https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'; e.target.onError = null;}}
                    alt={personName} />
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
export default widthErrorApi(PlanetPage) ;
