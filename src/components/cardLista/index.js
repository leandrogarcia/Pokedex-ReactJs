import './index.scss';
import { useAxiosGet } from "../../Hooks/HttpRequests";

export default function CardListaComponent(props){
    const url = props.pokemon.url;

    let pokemon = useAxiosGet(url);

    if(pokemon.data){
        return (
            <div className="card">
                <div className="p-2">
                    <h3 className="text-center mb-2">{props.pokemon.name}</h3>
                    <figure className="text-center mb-2">
                        <img src={pokemon.data.sprites.other.dream_world.front_default} />
                    </figure>
                    <div className='text-right'>#{pokemon.data.id}</div>
                </div>
            </div>
        );
    }

    
}