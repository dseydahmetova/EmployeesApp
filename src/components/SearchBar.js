const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <form className="Search">
      <input
        className="SearchInput"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchBar;
