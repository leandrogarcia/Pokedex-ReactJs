import './menu.scss';
import close from '../../images/xmark-solid.svg';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function MenuComponent(props){

    const [filter, setFilter] = useState(``);
    const [menuItems, setMenuItems] = useState([]);
    const [loadedItems, setLoadedItems] = useState([]);
    
    function onTrigger(){
        props.parentCallback();
    }

    function searchCallback(url) {
        props.searchCallback(url);
    }

    function doFilter(e) {
        const typedValue = e.target.value;
        setFilter(typedValue);
        const items = loadedItems.filter(item => item.name.indexOf(typedValue) > -1)
        setMenuItems(items);
    }

    

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/type/`;
        axios(url)
            .then((result) => {
                setMenuItems(result.data.results);
                setLoadedItems(result.data.results);
                //console.log(result.data.results)
            })

    }, []);
    return (
        <div className={"menu "+props.menuState}>
            <div className='menuContent'>
                <div className='actions p-2'>
                    <button onClick={() => onTrigger()}><img src={close} className="mr-2" /> fechar </button>
                </div>
                <div className='menuContentContainer'>
                    <div>
                        <input 
                            placeholder='Filtrar por tipo'
                            value={filter}
                            onChange={(e) => doFilter(e)}
                        />
                        <nav>
                            {menuItems.map((item,key) => <a href="#" onClick={() => searchCallback(item.url)} rel={item.url} key={key}>{item.name}</a>)}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default MenuComponent;
