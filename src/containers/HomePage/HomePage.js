import { NavLink } from "react-router-dom";
import { URL_IMG_PERSON,URL_IMG_FILM,GUIDE_IMG_EXTENSION } from "../../constans/constans";
import s from './HomePage.module.scss'
const HomePage = () => {
    console.log(URL_IMG_PERSON + 1 + GUIDE_IMG_EXTENSION)

    return(
        <div className={s.home__container}>
				<NavLink to='/people/?page=1' className={s.link}><img src={URL_IMG_PERSON + '/' +  1 + GUIDE_IMG_EXTENSION } /><p>People</p></NavLink>
				<NavLink to='/planets' className={s.link}><img src="https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"  /><p>Planets</p></NavLink>
				<NavLink to='/films' className={s.link}><img src={URL_IMG_FILM + '/' +  1 + GUIDE_IMG_EXTENSION } /><p>Films</p></NavLink>
				<NavLink to='/notfound' className={s.link}><img src="https://previews.123rf.com/images/pogorelovaolga/pogorelovaolga1803/pogorelovaolga180300099/98105737-space-with-the-stars-the-cosmonaut-and-the-rocket-site-error-404-page-not-found-platform-vector-illu.jpg"alt="" /><p>Not Found</p></NavLink>
        </div>
    )
}

export default HomePage;