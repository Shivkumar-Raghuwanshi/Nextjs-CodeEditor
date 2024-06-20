
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { executeCode } from "./api";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface OutputProps {
  editorRef: React.RefObject<any | null>;
  language: string;
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { toast } = useToast();

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Unable to run code",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearOutput = () => {
    setOutput([]);
    setIsError(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between mb-2 px-4">
        <Button onClick={runCode} variant="outline" className="bg-green-600 text-white hover:bg-green-300">
          {isLoading ? "Running" : "Run Code"}
        </Button>
        <Button onClick={clearOutput} variant="outline">
          Clear Output
        </Button>
      </div>
      <Textarea
        className="flex-1 p-4 rounded-md shadow-md bg-gray-800 font-mono"
        readOnly
        value={output.join("\n") || 'Click "Run Code" to see the output here'}
        style={{
          color: isError ? "red" : "white",
          borderColor: isError ? "red" : "transparent",
        }}
      />
    </div>
  );
};

export default Output;