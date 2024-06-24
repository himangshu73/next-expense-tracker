import ExpenseCard from "./(components)/ExpenseCard";
import ExpenseEntryForm from "./(components)/ExpenseEntryForm";
import MonthlyExpense from "./(components)/MonthlyExpense";

export default function Home() {
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2 flex flex-col p-4">
        <ExpenseEntryForm />
        <MonthlyExpense />
      </div>
      <div className="w-full md:w-1/2 flex flex-col p-4 justify-between">
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
    </div>
  );
}
