import './home.scss';
import HeaderComponent from '../components/header/header';
import MenuComponent from '../components/menu/menu';
import FooterComponent from '../components/footer/footer';
import CardListaComponent from '../components/cardLista/';
import React, { useEffect, useState } from "react";
import { useAxiosGet } from "../Hooks/HttpRequests";
import axios from 'axios';

function Home() {
    
    let content = null;
    const [menu, setMenu] = useState('inactive');

    function handleMenu (childData){
        setMenu(childData);
    }

    const [pokemons, setPokemons] = useState();
    
    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=20`;
        axios.get(url)
            .then(response => {
                setPokemons(response)
            })
            .catch(() => {
                
            })
    }

    if(typeof pokemons != 'undefined' && pokemons.data.results){
        content = pokemons.data.results.map((item, key) => 
            <CardListaComponent pokemon={item} key={key} />
        );
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='col-12 mx-auto'>
                        <div className='pokedexContainer'>
                            <HeaderComponent parentCallback = {handleMenu}/>
                            <MenuComponent parentCallback = {handleMenu} menuState={menu}/>
                            <div className='content'>
                                <div>
                                    {content}
                                </div>
                            </div>
                            <FooterComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;