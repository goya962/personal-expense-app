import { BankForm } from '../components/Banks/BankForm';
import { BankList } from '../components/Banks/BankList';

export default function Home() {
  return (
    <main>
      <h1>Personal Expense App</h1>
      <BankForm />
      <BankList />
    </main>
  );
}
