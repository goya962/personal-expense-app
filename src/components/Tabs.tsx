
'use client';
import React, { useState } from 'react';

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export function Tabs({ tabs }: { tabs: TabItem[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="tabs"> {/* Or tab-list */}
        {tabs.map((t, idx) => (
          <button
            key={idx}
            className={`tab-button ${active === idx ? 'active' : ''}`} // Or just className={active === idx ? 'active' : ''}
            onClick={() => setActive(idx)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>{tabs[active]?.content}</div> {/* Or <div className="tab-panel">{tabs[active].content}</div> */}
    </div>
  );
}
