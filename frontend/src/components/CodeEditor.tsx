import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (value: string) => void;
}

export default function CodeEditor({
  code,
  language,
  onChange,
}: CodeEditorProps) {
  return (
    <div className="editor-wrapper">
      <Editor
        height="380px"
        defaultLanguage={language}
        language={language}
        value={code}
        theme="vs-dark"
        onChange={(value) => onChange(value || "")}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
}
