
import { useWindowSize } from 'helpers/useWindowSize';
import searchIcon from 'images/search-icon.png'
import { SearchIconWrapper } from 'Components/NavbarComponents/Navbar.style'

function SearchBar() {
    return (
        <form className={useWindowSize()[0] > 1200 ? 'w-80' : 'w-60'}>   
            <div className="relative">  
                <SearchIconWrapper>
                    <img src={searchIcon} className='w-5'/>
                </SearchIconWrapper>
                <input type="input" className="custom-search w-full p-4 pl-10 text-md bg-gray" placeholder="Search Coin..." required />
            </div>
        </form>
    )
}
export default SearchBar;