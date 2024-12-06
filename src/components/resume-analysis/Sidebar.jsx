import React from "react";
import {
  BarChart2,
  ListChecks,
  AlertTriangle,
  Type,
  LayoutList,
} from "lucide-react";

const sideItems = [
  { id: "score", label: "Resume Score", icon: BarChart2 },
  { id: "suggestions", label: "Key Suggestions", icon: ListChecks },
  { id: "improvements", label: "Areas for Improvement", icon: AlertTriangle },
  { id: "repetitive", label: "Repetitive Words", icon: Type },
  { id: "sections", label: "Section Analysis", icon: LayoutList },
];

function Sidebar({ activeSection, onSectionChange }) {
  return (
    <div>
      <nav className="bg-white shadow-lg rounded-lg p-4 h-full">
        <div className="space-y-1">
          {sideItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                onSectionChange(id);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeSection === id
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
