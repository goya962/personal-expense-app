import { BankForm } from '../components/Banks/BankForm';
import { BankList } from '../components/Banks/BankList';
import { Tabs, TabItem } from '../components/Tabs';

export default function Home() {
  const tabs: TabItem[] = [
    {
      label: 'Bancos',
      content: (
        <>
          <BankForm />
          <BankList />
        </>
      ),
    },
    { label: 'Resumen', content: <div>Próximamente</div> },
  ];

  return (
    <main>
      <h1>Personal Expense App</h1>
      <Tabs tabs={tabs} />
    </main>
  );
}
