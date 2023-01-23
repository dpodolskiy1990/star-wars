import React from 'react';
import { NavLink, Route, BrowserRouter, Routes} from 'react-router-dom';
import  s from './App.module.scss';

import routesConfig from '../../routes/routesConfig';

function App() {
	return (
		<div className={s.wraper}>
			<BrowserRouter basename='/star-wars/'>
			<header className={s.header}>
				<NavLink  to='/' className={({ isActive }) => (isActive ? s.activete : s.link)} >Home</NavLink>
				<NavLink to='/people/?page=1' className={({ isActive }) => (isActive ? s.activete : s.link)} >People</NavLink>
				<NavLink to='/planets' className={({ isActive }) => (isActive ? s.activete : s.link)}>Planets</NavLink>
				<NavLink to='/films' className={({ isActive }) => (isActive ? s.activete : s.link)}>Films</NavLink>
				<NavLink to='/notfound' className={({ isActive }) => (isActive ? s.activete : s.link)}>Not Found</NavLink>
			</header>
				<div className={s.main__content}>
				<Routes>
					{routesConfig.map(((route, index) =>{
						return (<Route  
						key={index}
						exact={route.exact}
						path={route.path}
						element={route.element}/>)
					}))}
				</Routes>
				</div>
				<footer>

					<img src="https://www.pngmart.com/files/11/Kylo-Ren-Lightsaber-PNG-Transparent.png" alt="lightsaber" />
				</footer>
			</BrowserRouter>
		</div>
	)}
	export default App;
