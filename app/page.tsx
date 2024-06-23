import ExpenseCard from "./(components)/ExpenseCard";
import ExpenseEntryForm from "./(components)/ExpenseEntryForm";

export default function Home() {
  return (
    <div className="m-4">
      <ExpenseEntryForm />
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
    </div>
  );
}
