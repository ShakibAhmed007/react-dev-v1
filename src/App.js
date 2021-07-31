import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    const element = (
        <div>
            <NewExpense />
            <Expenses title="Expenses" />
        </div>
    );
    return element;
}

export default App;
