import './home.scss';
import HeaderComponent from '../components/header/header';
import MenuComponent from '../components/menu/menu';
import FooterComponent from '../components/footer/footer';
import CardListaComponent from '../components/cardLista/';
import React, { useEffect, useState } from "react";
import axios from 'axios';

function Home() {
    
    let content = null;
    const [menu, setMenu] = useState('inactive');
    const [pokemons, setPokemons] = useState([]);
    const [loadedPokemon, setLoadedPokemon] = useState([]);
    const [nextURL, setNextURL] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=40&offset=0`);
    const [loading, setLoading] = useState('Carregar mais');
    const [isFilter, setIsFilter] = useState(false);


    function handleMenu (childData){
        setMenu(childData);
    }

    function searchCallback(url){
        axios.get(url)
            .then(response => {          
                const lista = [];

                response.data.pokemon.forEach((item) => {
                    lista.push(item.pokemon)
                });

                setPokemons(lista);

                setMenu('inactive')
                setIsFilter(true);

            })
            .catch(() => {
                
            })
    }

    useEffect(() => {
        getPokemons();
    }, []);

   
    function getPokemons(){
        setLoading(`Carregando`);
        axios.get(nextURL)
            .then(response => {

                
                const lista = pokemons;

                response.data.results.forEach((item) => {
                    lista.push(item)
                });
                setPokemons(lista);
                setLoadedPokemon(lista);
                //console.log(lista)
                setNextURL(response.data.next);

                setLoading(`Carregar mais`);

            })
            .catch(() => {
                
            })
    }
    
    function clearFilter() {
        setIsFilter(false);
        setPokemons(loadedPokemon);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='col-12 mx-auto'>
                        <div className='pokedexContainer'>
                            <HeaderComponent parentCallback = {handleMenu}/>
                            <MenuComponent parentCallback = {handleMenu} menuState={menu} searchCallback={searchCallback}/>
                            <div className='content'>
                                <div>
                                    {pokemons.map((item, key) => <CardListaComponent pokemon={item} key={key} />)}
                                </div>
                                {(nextURL && !isFilter) && <div className='hasLoad'><button onClick={getPokemons} className='loadMore'>{loading}</button></div>}
                                {(isFilter) && <div className='hasLoad'><button onClick={clearFilter} className='loadMore'>Limpar filtro</button></div>}
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