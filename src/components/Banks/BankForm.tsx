import React, { useState } from 'react';
import { useBanks } from '../../hooks/useBanks';

export function BankForm() {
  const { addBank } = useBanks();
  const [name, setName] = useState('');
  const [balance, setBalance] = useState<number>(0);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addBank(name, balance);
    setName('');
    setBalance(0);
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Nombre de banco"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Saldo inicial"
        value={balance}
        onChange={(e) => setBalance(Number(e.target.value))}
        required
      />
      <button type="submit">Agregar Banco</button>
    </form>
  );
}
