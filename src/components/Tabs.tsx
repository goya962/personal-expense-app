"use client";
import { useState, ReactNode } from 'react';

export interface Tab {
  label: string;
  content: ReactNode;
}

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            className={i === active ? 'active' : ''}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[active]?.content}</div>
    </div>
  );
}
