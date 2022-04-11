export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={onChangeFilter} />
      </label>
    </form>
  );
};
