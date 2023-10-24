
import styles from './search-bar.module.css'


// import icon
import SearchIcon from '../icons/search-icon'


const SearchBar = () => {

    return (
        <div className={styles.searchContainer}>
            <div className={styles.iconSearch}>
                <SearchIcon />
            </div>
            <form>
                <input placeholder="Search your favourites" className={styles.form} name={'search'} />
            </form>
        </div>
    )
}

export default SearchBar