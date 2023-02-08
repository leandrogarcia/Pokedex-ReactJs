import './cardLista.scss';

export default function CardListaComponent(){
    return (
        <div className="card">
            <div className="p-2">
                <h3 className="text-center mb-2">Togepi</h3>
                <figure className="text-center mb-2">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/175.svg" />
                </figure>
                <div className='text-right'>#12</div>
            </div>
        </div>
    );
}