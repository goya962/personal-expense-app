import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase';

export interface Bank {
  id: string;
  name: string;
  initialBalance: number;
}

export function useBanks() {
  const [banks, setBanks] = useState<Bank[]>([]);
  useEffect(() => {
    const q = query(collection(db, 'banks'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snap) =>
      setBanks(
        snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Bank, 'id'>) }))
      )
    );
    return () => unsub();
  }, []);

  const addBank = async (name: string, initialBalance: number) => {
    await addDoc(collection(db, 'banks'), { name, initialBalance, createdAt: new Date() });
  };

  const deleteBank = async (id: string) => {
    await deleteDoc(doc(db, 'banks', id));
  };

  return { banks, addBank, deleteBank };
}
