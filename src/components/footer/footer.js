import lupa from '../../images/magnifying-glass-solid.svg';
import './footer.scss';

export default function FooterComponent(){
    return (
        <footer>
            <div>
                <input type="search" className="w-100" placeholder="Buscar"/>
                <button>
                    <img src={lupa} />
                </button>
            </div>
        </footer>
    );
}