import React from "react";
import useDocumentTitle from "../useDocumentTitle";

export default function NoPage({ title }) {
  useDocumentTitle(title);
  return (
    <div className="msgBox">
      <i className="fa-solid fa-road-circle-exclamation fa-4x dull"></i>
      <span>Page Not Found</span>
    </div>
  );
}
