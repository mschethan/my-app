import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div className="expense-item__description">This is the item!</div>
            <h3>Car Insurance</h3>
            <div className="expense-item__price">1200/-</div>
        </div>
    );
}

export default ExpenseItem;