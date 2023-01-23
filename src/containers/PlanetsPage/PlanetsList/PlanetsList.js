import s from './PlanetsList.module.scss'
import { Link } from 'react-router-dom';

const PlanetsList = ({planets}) => {
    return(
    <ul className={s.list__container}>
        
        {planets.map(({id, name, img}) =>{
           return( 
           <li key={name} className={s.list__item}>
                <Link to={'/planets/' + id}>
                    <img src={img} 
                     onError={(e) => {e.target.src = 'https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'; e.target.onError = null;}}
                     alt={name} className={s.person__photo}/>
                    <p  >{name}</p>
                </Link>
            </li>
            
        )})}
    </ul>  
    )
}
export default PlanetsList;