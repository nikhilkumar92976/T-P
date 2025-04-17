import { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-1/2 relative">
      {/* top */}
      <div className="flex gap-4">
        <button
          onClick={runCode}
          disabled={isLoading}
          className={`mb-4 px-4 py-2 border border-green-600 rounded hover:bg-green-600 hover:text-white transition ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>
        <h2 className="text-lg mb-2">Output :</h2>
      </div>
    {/* output screen */}
    <div
      className={`h-[85vh] w-[48vw] p-2 overflow-auto border rounded ${
        isError ? "border-red-500 text-red-400" : "border-gray-700"
      }`}
    >
      {output && output.length > 0
        ? output.map((line, i) => <p key={i}>{line}</p>)
        : 'Click "Run Code" to see the output here'}
    </div>
  </div>
  );
};
export default Output;