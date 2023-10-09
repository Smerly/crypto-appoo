
import { useWindowSize } from 'helpers/useWindowSize';
import searchIcon from 'images/search-icon.png'
import { SearchIconWrapper, SearchInput } from 'Components/NavbarComponents/Navbar.style'

function SearchBar() {
    return (
        <form className={useWindowSize()[0] > 1200 ? 'w-80' : 'w-60'}>   
            <div className="relative">  
                <SearchIconWrapper>
                    <img src={searchIcon} className='w-5'/>
                </SearchIconWrapper>
                <SearchInput type="input" placeholder="Search Coin..." required />
            </div>
        </form>
    )
}
export default SearchBar;