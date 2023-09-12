function ListGroup() {
  let items = ["Mumbai", "London", "New York", "Paris", "Johnesburg"];
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className='list-group'>
        {items.map((item) => (
          <li key={item} onClick={(event) => console.log(event)} className='list-group-item list-group-item-action'>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
