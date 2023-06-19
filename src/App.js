import FormInput from "./component/FormInput";
import TableList from "./component/TableList";

function App(props) {
  return (
    <div>
      <h2>Welcome to our Restaurant</h2>
      <FormInput />
      <TableList
        id={props.id}
        price={props.price}
        name={props.dish}
        category={props.table}
      />
    </div>
  );
}

export default App;
