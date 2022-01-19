import InputForm from "./InputForm";

const NewExpense = (props) => {


    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData)
    }
    return (
        <div>
            <InputForm onSaveExpenseData={SaveExpenseDataHandler}/>
        </div>
    )
}
export default NewExpense