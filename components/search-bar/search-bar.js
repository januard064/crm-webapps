
import styles from './search-bar.module.css'


// import icon
import SearchIcon from '../icons/search-icon'


const SearchBar = (props) => {

    const { searchText, setSearchText } = props

    const handleSearchText = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
    }

    return (
        <div className={styles.searchContainer}>
            <div className={styles.iconSearch}>
                <SearchIcon />
            </div>
            <form>
                <input placeholder="Search your favourites" className={styles.form} name={'search'} value={searchText} onChange={handleSearchText} />
            </form>
        </div>
    )
}

export default SearchBar