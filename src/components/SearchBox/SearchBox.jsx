export default function SearchBox({ value, onSearch }) {
  //контрольований елемент -> передача value і onChange
  return (
    <div>
      <label htmlFor="">
        Find contacts by name
        <input
          type="text"
          name="search"
          value={value}
          // onSearch = setsearchValue, в який передаємо поточне значення інпуту, яке запишеться в стан
          onChange={evt => onSearch(evt.target.value)}
        />
      </label>
    </div>
  );
}
