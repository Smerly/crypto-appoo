
import { useWindowSize } from '../helpers/useWindowSize';
import searchIcon from '../images/search-icon.png'

function SearchBar() {
    return (
        <form className={useWindowSize()[0] > 1200 ? 'w-80' : 'w-60'}>   
            {/* <label for="default-search" className="mb-2 text-sm font-medium bg-gray sr-only dark:text-white">Search</label> */}
            <div className="relative">  
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img src={searchIcon} className='w-5'/>
                </div>
                <input type="input" className="custom-search w-full p-4 pl-10 text-md bg-gray" placeholder="Search Coin..." required />
            </div>
        </form>
    )
}
export default SearchBar;