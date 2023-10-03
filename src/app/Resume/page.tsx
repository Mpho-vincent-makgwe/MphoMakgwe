import React from 'react';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';

const Resume = () => {
  const pdfUrl = `/CV/Mpho'sCV.pdf`;
  if (typeof window !== 'undefined') {
  return (
    <div>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
  }
};

export default Resume;
