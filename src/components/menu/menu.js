import './menu.scss';
import close from '../../images/xmark-solid.svg';
import React from 'react';
import { useAxiosGet } from "../../Hooks/HttpRequests";

function MenuComponent(props){

    
    function onTrigger(event){
        props.parentCallback('');
    }

    const url = `https://pokeapi.co/api/v2/type/`;
    let result = useAxiosGet(url);
    let content = null;

    if(result.data){
        content = result.data.results.map((item) => 
            <a href="#">{item.name}</a>
        )
    }

    return (
        <div className={"menu "+props.menuState}>
            <div className='menuContent'>
                <div className='actions p-2'>
                    <button onClick={onTrigger}><img src={close} className="mr-2" /> fechar </button>
                </div>
                <div className='menuContentContainer'>
                    <div>
                        <h2>Filtrar por tipo</h2>
                        <nav>
                            {content}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default MenuComponent;
