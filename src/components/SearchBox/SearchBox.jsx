export default function SearchBox({ value, onSearch }) {
  return (
    <div>
      <label htmlFor="">
        Find contacts by name
        <input
          type="text"
          name="search"
          value={value}
          onChange={evt => onSearch(evt.target.value)}
        />
      </label>
    </div>
  );
}
