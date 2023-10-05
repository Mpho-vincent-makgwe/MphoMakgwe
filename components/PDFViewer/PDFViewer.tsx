// PDFViewer.js
import React from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const PDFViewer = ({ pdfUrl }:any) => {
  const docs = [
    {
      uri: pdfUrl,
      fileType: 'pdf',
    },
  ];
  return (
    <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
  );
};

export default PDFViewer;
