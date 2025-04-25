import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className="p-4 bg-[#10141E] h-screen w-screen">
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-1/2">
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor
          options={{
            minimap: { enabled: false },
          }}
          height="85vh"
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>

      <div className="w-full lg:w-1/2">
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  </div>
  );
};
export default CodeEditor;