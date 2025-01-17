import React from 'react';
import '../css/Header.css';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import WhiteBookLogo from '../assets/logo_white.png';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Link, useHistory} from "react-router-dom";
import * as ROUTES from '../constants/constants';

/**
 * Handles the Header of the website in the top of the website, for each page.
 */
function Header() {

    /* Gets the referencse of 2 DOM elements */
    const createInfoRef = React.createRef()
    const listInfoRef = React.createRef()
    
    const history = useHistory();

    const [search, setSearch] = React.useState()

    const handleSearchChange = e => setSearch(e.target.value)

    const submitSearch = (e) => {
        e.preventDefault()
        if(search){
            history.push({
                pathname: ROUTES.SEARCH,
                search: `?query=${search}`,
            });
        }
    }

    /* If the mouse enters a DOM element, a infotip will appear, according to the hovered DOM element*/
    const displayInfo = (e,type) => {
        e.preventDefault();
        type === "create" ? createInfoRef.current.style.display = "block" : listInfoRef.current.style.display ="block"
    }

    /* If the mouse leaves a DOM element, the infotip will disappear, according to the hovered DOM element*/
    const hideInfo = (e,type) => {
        e.preventDefault();
        type === "create" ? createInfoRef.current.style.display = "none" : listInfoRef.current.style.display ="none"
    }

    return (
        <div className="header">
            <Link to={ROUTES.LANDING}>
                <h1 className="header__title">My Virtual Library</h1>
                <img className="header__logo" src={WhiteBookLogo} alt="logo" />
            </Link>
            <form id="uploadBookForm" className="header__search" onSubmit={e => submitSearch(e)} noValidate>
                <IconButton className="header__searchBtn" type="submit">
                    <SearchIcon className="header__searchIcon" />
                </IconButton>
                <input className="header__input" placeholder="Search for title, category, etc..." type="text" onChange={handleSearchChange}/>
            </form>
            <div className="header__options">
                <div onMouseEnter={e => displayInfo(e,"create")} onMouseLeave={e => hideInfo(e,"create")}>
                    <Link to={ROUTES.UPLOAD}>
                        <IconButton>
                            <CreateIcon className="header__optionsIcon" />
                        </IconButton>
                    </Link>
                    <div ref={createInfoRef} className="header_info">
                        <p>Add a new book</p>
                    </div>
                </div>
                <div onMouseEnter={e => displayInfo(e,"list")} onMouseLeave={e => hideInfo(e,"list")}>
                    <Link to={ROUTES.LISTALL}>
                        <IconButton>
                            <MenuBookIcon className="header__optionsIcon" />
                        </IconButton>
                    </Link>
                    <div ref={listInfoRef} className="header_info">
                        <p>See all your books</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;