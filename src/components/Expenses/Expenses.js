/* eslint-disable react/destructuring-assignment */
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
            <h2>{props.title}</h2>
            <ExpenseItem
                title={props.expenses[0].title}
                date={props.expenses[0].date}
                price={props.expenses[0].price}
            />
            <ExpenseItem
                title={props.expenses[1].title}
                date={props.expenses[1].date}
                price={props.expenses[1].price}
            />
            <ExpenseItem
                title={props.expenses[2].title}
                date={props.expenses[2].date}
                price={props.expenses[2].price}
            />
        </Card>
    );
}

export default Expenses;
