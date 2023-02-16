import { Link } from 'react-router-dom'
import './DropdownMenu.css';

export default function DropdownMenu({ setActiveCat, activeCat, setOpen, open }) {
    return (
        <Link to='/bakery/items' onClick={() => setOpen(false)}>
            <ul className='cat-li'>
                <li onClick={() => setActiveCat('Cakes')}>Cake</li>
                <li onClick={() => setActiveCat('Cookies')}>Cookies</li>
                <li onClick={() => setActiveCat('Drinks')}>Drinks</li>
                <li onClick={() => setActiveCat('Cupcakes')}>Cupcakes</li>
                <li onClick={() => setActiveCat('Miscellaneous')}>Misc.</li>
            </ul>
        </Link>
    )
}