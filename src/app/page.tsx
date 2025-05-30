import { BankForm } from '../components/Banks/BankForm';
import { BankList } from '../components/Banks/BankList';
import { Tabs, Tab } from '../components/Tabs';

export default function Home() {
  const tabs: Tab[] = [
    {
      label: 'Bancos',
      content: (
        <>
          <BankForm />
          <BankList />
        </>
      ),
    },
    {
      label: 'Resumen',
      content: <p>Próximamente...</p>,
    },
  ];

  return (
    <main>
      <h1>Personal Expense App</h1>
      <Tabs tabs={tabs} />
    </main>
  );
}
