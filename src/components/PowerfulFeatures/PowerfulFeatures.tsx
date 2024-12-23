"use client"

import { useState } from "react";

import { TABS_FEATURES } from "../../shared/constant";

import FeatureTab from "./FeatureTab";
import FeatureContent from "./FeatureContent";

export default function PowerfulFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 first-line font-heading">
          Powerful Advanced Features
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Dynamically initiate market positioning total linkage with
          clicks-and-mortar technology progressively procrastinate compelling.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {TABS_FEATURES.map((feature, index) => (
            <FeatureTab
              key={index}
              title={feature.title}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>

        <FeatureContent {...TABS_FEATURES[activeTab].content} />
      </div>
    </div>
  );
}
