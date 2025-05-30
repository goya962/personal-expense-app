
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
      <div className="tabs">
        {tabs.map((t, idx) => (
          <button
            key={idx}
            className={`tab-button ${active === idx ? 'active' : ''}`}
            onClick={() => setActive(idx)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>{tabs[active]?.content}</div>

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
