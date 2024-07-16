"use client"

import { useState } from "react"
import { PlusMini, MinusMini } from "@medusajs/icons"

interface Tab {
  title: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const toggleTab = (title: string) => {
    setActiveTab(activeTab === title ? null : title)
  }

  return (
    <div>
      <div className="flex flex-col">
        {tabs.map((tab: Tab) => (
          <div
            key={tab.title}
            className="flex items-center cursor-pointer mt-5"
            onClick={() => toggleTab(tab.title)}
          >
            <span
              className={`p- ${activeTab === tab.title ? "font-bold" : ""}`}
            >
              {tab.title}
            </span>
            <span className="ml-auto pl-4">
              {activeTab === tab.title ? <MinusMini /> : <PlusMini />}
            </span>
          </div>
          
        ))}
      </div>
      <div>
        {tabs.map((tab: Tab) =>
          activeTab === tab.title ? (
            <div key={tab.title}>{tab.content}</div>
          ) : null
        )}
      </div>
    </div>
  )
}

export default Tabs
