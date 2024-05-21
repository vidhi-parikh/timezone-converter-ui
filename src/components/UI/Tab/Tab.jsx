import React, { useEffect, useState } from "react";
import "./Tab.css";

const Tab = ({ tabs, initialActiveTab }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab || 0);

  useEffect(() => {
    setActiveTab(initialActiveTab);
  }, [initialActiveTab]);

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {activeTab === index ? (
              <span>
                {tab.month} {tab.label}
              </span>
            ) : (
              <span>{tab.label}</span>
            )}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
