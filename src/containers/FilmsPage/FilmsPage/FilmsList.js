import s from './FilmsList.module.scss'
import { Link } from 'react-router-dom';

const FilmsList = ({films}) => {
    return(
    <ul className={s.list__container}>
        
        {films.map(({id, title, img}) =>{
           return( 
           <li key={title} className={s.list__item}>
                <Link to={'/films/' + id}>
                    <img src={img} alt={title} className={s.person__photo}/>
                    <p  >{title}</p>
                </Link>
            </li>
            
        )})}
    </ul>  
    )
}
export default FilmsList;