import './home.scss';
import HeaderComponent from '../components/header/header';
import MenuComponent from '../components/menu/menu';
import FooterComponent from '../components/footer/footer';
import CardListaComponent from '../components/cardLista/cardLista';
import React from 'react';

class Home extends React.Component {
    state = {
        'menu' : "inactive"
    };
    
    handleMenu = (childData) =>{
        this.setState({menu: childData})
    }

    render(){

        const {menu} = this.state;
        
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-md-5 mx-auto'>
                            <div className='pokedexContainer'>
                                <HeaderComponent parentCallback = {this.handleMenu}/>
                                <MenuComponent parentCallback = {this.handleMenu} menuState={menu}/>
                                <div className='content'>
                                    <div>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
                                        <CardListaComponent/>
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
}

export default Home;