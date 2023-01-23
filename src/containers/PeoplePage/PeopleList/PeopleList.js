import s from './PeopleList.module.scss'
import { Link } from 'react-router-dom';

const PeopleList = ({people}) => {
    let sex = (sex) => {
        if(sex === 'male'){
            return s.perosn__tittle__male;
        }
        else if(sex === 'female'){
            return s.perosn__tittle__female;
        }
        else{
            return s.perosn__tittle__non;
        }
    }
    return(
    <ul className={s.list__container}>
        {people.map(({id, name, img, gender}) =>{
           return( 
           <li key={name} className={s.list__item}>
                <Link to={'/people/' + id}>
                    <img src={img} alt={name} className={s.person__photo}/>
                    <p  className={sex(gender)}>{name}</p>
                </Link>
            </li>
            
        )})}
    </ul>  
    )
}
export default PeopleList;