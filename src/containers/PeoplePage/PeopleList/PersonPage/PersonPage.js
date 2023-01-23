import { useHref, useNavigate } from 'react-router-dom';
import { getApiResource } from '../../../../utils/network';
import { useEffect } from 'react';
import { API_SWAPI_PERSON} from '../../../../constans/constans';
import { useState } from 'react';
import { widthErrorApi } from '../../../../hoc-helpers/withErrorApi';
import { getPeopleIMG } from '../../../../utils/getID';
import s from './PersonPage.module.scss';

const PersonPage = ({setErrorApi}) => {
    const [personInfo, setPersoInfo] = useState(null);
    const [personName, setPersoName] = useState(null);
    const [personFilms, setPersoFilms] = useState(null);
    const [personStarships, setPersoStarships] = useState(null);
    const [personVehicles, setPersoVehicles] = useState(null);
    const [personHomeWorld, setPersoHomeWorld] = useState(null);
    const [personURL, setPersoURL] = useState(null);
    const [perosnIMG, setPersonIMG] = useState(null);
    const id = Number(useHref().match(/\d/)[0]);
    const navigate = useNavigate();
    useEffect(() =>{
        (async () =>{
            const res = await getApiResource(API_SWAPI_PERSON +'/' + id + '/')
            if (res){
                setErrorApi(false);
                setPersoInfo([                    
                    {title:'Eye color', data:res.eye_color},
                    {title:'Gender', data:res.gender},
                    {title:'Hair color', data:res.hair_color},
                    {title:'Height', data:res.height},
                    {title:'Mass', data:res.mass},
                    {title:'Skin color', data:res.skin_color},  
                ])
                setPersoName(res.name);
                const starships = [];
                for(let item of res.starships){
                    let res = await getApiResource(item)
                    starships.push(res.name)
                }
                setPersoStarships({title:'Starships', data:starships});
                const vehicles = [];
                for(let item of res.vehicles){
                    let res = await getApiResource(item)
                    vehicles.push(res.name)
                }
                setPersoVehicles({title:'Vehicles', data:vehicles});
                const films = [];
                for(let item of res.films){
                    let res = await getApiResource(item)
                    films.push(res.title)
               }
                setPersoFilms({title:'Films', data:films});
                const homeworld = (await getApiResource(res.homeworld)).name
                setPersoHomeWorld(homeworld)
                setPersoURL(res.url)
                setPersonIMG(getPeopleIMG(id))
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
                                    {personHomeWorld && <li><span>Home world</span> : <span>{personHomeWorld}</span></li>}        
                                </ul>  
                            )}                        
                </div>
                )}
                {personFilms && personFilms.data.length > 0 && (
                    <div className={s.person__films}>
                        <h2>{personFilms.title}</h2> 
                            <ul>
                                {personFilms.data.map((item) =>{
                                    return <li key={item}>{item}</li>
                                })}
                            </ul>
                    </div>
                )}
                {personStarships && personStarships.data.length > 0 && (
                    <div className={s.person__films}>
                        <h2>{personStarships.title}</h2> 
                            <ul>
                                {personStarships.data.map((item) =>{
                                    return <li key={item}>{item}</li>
                                })}
                            </ul>
                    </div>
                )}
                {personVehicles && personVehicles.data.length > 0 && (
                    <div className={s.person__films}>
                        <h2>{personVehicles.title}</h2> 
                            <ul>
                                {personVehicles.data.map((item) =>{
                                    return <li key={item}>{item}</li>
                                })}
                            </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
export default widthErrorApi(PersonPage) ;
