import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "text-blue-400";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="ml-2 mb-4 flex gap-4">
      <h1 className="text-2xl mb-2">Language:</h1>
      <select
        value={language}
        onChange={(e) => onSelect(e.target.value)}
        className="bg-gray-900 text-white px-4 py-2 rounded-md"
      >
        {languages.map(([lang, version]) => (
          <option key={lang} value={lang}>
            {lang} ({version})
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
