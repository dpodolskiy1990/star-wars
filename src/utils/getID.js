import { SWAPI_ROOT, HTTPS, SWAPI_PEOPLE, URL_IMG_PERSON, GUIDE_IMG_EXTENSION, SWAPI_PARAM_PAGE, SWAPI_PLANETS, URL_IMG_PLANET, URL_IMG_FILM, SWAPI_FILMS} from "../constans/constans"

export const getPeoplePageID = url => {
    const position = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id =  url.slice(position+SWAPI_PARAM_PAGE.length, url.length);
    return Number(id);
}


export const getID = (url, category) => {
 const id = url
 .replace(HTTPS + SWAPI_ROOT + category, '')
 .replace(/\//g, '');
 return id;
}

export const getPeopleID = (url) => {return getID(url, SWAPI_PEOPLE)};
export const getPeopleIMG = id => URL_IMG_PERSON + '/' + id + GUIDE_IMG_EXTENSION;

export const getPlanetsID = (url) => {return getID(url, SWAPI_PLANETS)};
export const getPlanetsIMG = id => URL_IMG_PLANET + '/' + id + GUIDE_IMG_EXTENSION;

export const getFilmsID = (url) => {return getID(url, SWAPI_FILMS)};
export const getFilmsIMG = id => URL_IMG_FILM + '/' + id + GUIDE_IMG_EXTENSION;
