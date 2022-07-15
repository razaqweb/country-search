const SearchBox = (props) => {
  return (
    <div className="inputField">
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchBox;
