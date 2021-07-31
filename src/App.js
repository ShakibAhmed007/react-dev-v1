import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    const expenses = [
        {
            title: 'Car 1',
            price: '1000 TK',
            date: '2021-07-30',
        },
        {
            title: 'Car 2',
            price: '2000 TK',
            date: '2021-07-30',
        },
        {
            title: 'Car 3',
            price: '3000 TK',
            date: '2021-07-30',
        },
    ];

    const saveExpenseData = (expenseFormData) => {
        expenses.push(expenseFormData);
        console.log('from child to parent --->>>', expenses);
    };
    const element = (
        <div>
            <NewExpense onSubmitExpenseForm={saveExpenseData} />
            <Expenses title="Expenses" expenses={expenses} />
        </div>
    );
    return element;
}

export default App;
