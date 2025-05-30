"use client";
import React, { ReactNode, useState } from 'react';

export interface Tab {
  label: string;
  content: ReactNode;
}

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="tab-list">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={active === idx ? 'active' : ''}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-panel">{tabs[active].content}</div>
    </div>
  );
}
