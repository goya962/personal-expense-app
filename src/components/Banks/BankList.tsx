import React from 'react';
import { useBanks } from '../../hooks/useBanks';

export function BankList() {
  const { banks, deleteBank } = useBanks();
  return (
    <ul>
      {banks.map((b) => (
        <li key={b.id}>
          {b.name}: ${b.initialBalance.toFixed(2)}
          <button onClick={() => deleteBank(b.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}
