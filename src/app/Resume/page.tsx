import React from 'react';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';

const Resume = () => {
  const pdfUrl = `/CV/Mpho'sCV.pdf`;

  return (
    <div>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default Resume;
