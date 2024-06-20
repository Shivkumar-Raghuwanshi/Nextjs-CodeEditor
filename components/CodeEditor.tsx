"use client";
import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef<any | null>(null);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-1 flex">
        <Card className="flex flex-col w-3/4 mr-4 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Code Editor</CardTitle>
            <CardDescription>Select a language and write your code.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow p-0 flex flex-col">
            <div className="flex items-center p-4">
              <LanguageSelector language={language} onSelect={onSelect} />
              <Button
                variant="destructive"
                onClick={() => setValue("")}
                className="ml-2"
              >
                Clear
              </Button>
            </div>
            <Editor
              className="flex-grow rounded-b-lg"
              language={language}
              value={value}
              options={{
                minimap: { enabled: false },
                theme: "vs-dark",
                fontSize: 16,
                fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
              }}
              onChange={(value) => setValue(value || "")}
              onMount={onMount}
            />
          </CardContent>
        </Card>
        <Card className="flex flex-col w-1/4 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Output</CardTitle>
            <CardDescription>See the output of your code here.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow p-0">
            <Output editorRef={editorRef} language={language} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CodeEditor;