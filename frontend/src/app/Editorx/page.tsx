"use client";
import Editor from "@monaco-editor/react";
import Topbar from "../Components/Common/Topbar/Topbar";

export default function page() {
  return (
    <div>
      <Topbar />
      <div className="p-4 md:p-6 lg:p-8">

      <Editor
      theme="vs-dark"
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onChange={() => {}}
      />
      </div>
    </div>
  );
}
