function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie or show..."
        aria-label="Search for a movie or show"
      />

      {value && (
        <button
          type="button"
          className="clear-search"
          onClick={() => onChange("")}
          aria-label="Clear Search"
        >
          ❌
        </button>
      )}
    </div>
  );
}

export default SearchBar;
