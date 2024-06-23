import ExpenseCard from "./(components)/ExpenseCard";
import ExpenseEntryForm from "./(components)/ExpenseEntryForm";

export default function Home() {
  return (
    <div className="m-4 flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <ExpenseEntryForm />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
    </div>
  );
}
