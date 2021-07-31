/* eslint-disable react/destructuring-assignment */
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const expenses = [
        {
            title: 'Car 1',
            price: '1000 TK',
            date: new Date(),
        },
        {
            title: 'Car 2',
            date: new Date(),
            price: '2000 TK',
        },
        {
            title: 'Car 3',
            date: new Date(),
            price: '3000 TK',
        },
    ];

    return (
        <Card className="expenses">
            <h2>{props.title}</h2>
            <ExpenseItem
                title={expenses[0].title}
                date={expenses[0].date}
                price={expenses[0].price}
            />
            <ExpenseItem
                title={expenses[1].title}
                date={expenses[1].date}
                price={expenses[1].price}
            />
            <ExpenseItem
                title={expenses[2].title}
                date={expenses[2].date}
                price={expenses[2].price}
            />
        </Card>
    );
}

export default Expenses;
