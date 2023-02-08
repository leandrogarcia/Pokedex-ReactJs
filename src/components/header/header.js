import bars from '../../images/bars-solid.svg';
import './header.scss';
import React, { useState } from 'react';

function openMenu(){

}

function HeaderComponent(props) {

    function onTrigger(event) {
        props.parentCallback('active');
        event.preventDefault();
        //console.log(props);
    }

    return (
        <header className='p-2'>
            <div className="row align-items-center">
                <div className="col-2">
                    <button onClick={onTrigger}><img src={bars} /></button>
                </div>
                <div className="col text-center">
                    <h1>pokedex</h1>
                </div>
                <div className="col-2"></div>
            </div>
        </header>
    );
}

export default HeaderComponent;