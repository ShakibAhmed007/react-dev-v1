/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    let expenseContent = <p>No Items Found : </p>;
    if (props.expenses.length > 0) {
        expenseContent = props.expenses.map((expense, index) => (
            <ExpenseItem
                key={index}
                title={expense.title}
                date={expense.date}
                price={expense.price}
            />
        ));
    }
    return (
        <Card className="expenses">
            <h2>{props.title}</h2>
            {expenseContent}
        </Card>
    );
}

export default Expenses;
