import ExpenseItem from './components/ExpenseItem';

function App() {
    const expenses = [
        {
            title: 'Car 1',
            price: '1000 TK',
            date: new Date().toDateString(),
        },
        {
            title: 'Car 2',
            date: new Date().toDateString(),
            price: '2000 TK',
        },
        {
            title: 'Car 3',
            date: new Date().toDateString(),
            price: '3000 TK',
        },
    ];

    const element = (
        <div>
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
        </div>
    );
    return element;
}

export default App;
