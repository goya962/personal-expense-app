import { BankForm } from '../components/Banks/BankForm';
import { BankList } from '../components/Banks/BankList';
import { Tabs, TabItem } from '../components/Tabs'; // Or Tab, depending on the actual export

export default function Home() {
  const tabs: TabItem[] = [ // Or Tab[]
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
      content: <p>Próximamente...</p>, // Or <div>Próximamente</div>
    },
  ];

  return (
    <main>
      <h1>Personal Expense App</h1>
      <Tabs tabs={tabs} />
    </main>
  );
}
