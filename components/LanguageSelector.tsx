import * as React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LANGUAGE_VERSIONS } from "./constants";

interface LanguageSelectorProps {
  language: string;
  onSelect: (language: string) => void;
}

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onSelect }) => {
  return (
    <div className=" mx-4">
      <Select value={language} onValueChange={onSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 rounded-md shadow-md">
          <SelectGroup>
            <SelectLabel className="text-gray-400">Languages</SelectLabel>
            {languages.map(([lang, version]) => (
              <SelectItem
                key={lang}
                value={lang}
                className={`${
                  lang === language
                    ? "text-blue-400 bg-gray-900"
                    : "text-gray-200 bg-transparent hover:text-blue-400 hover:bg-gray-900"
                }`}
              >
                {lang} <span className="text-gray-600 text-sm">({version})</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;