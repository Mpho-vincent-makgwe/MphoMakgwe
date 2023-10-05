// Resume.js
import React from 'react';
import PDFViewer from '@/components/PDFViewer/PDFViewer';

const Resume = () => {
  const pdfUrl = `/CV/Mpho'sCV.pdf`;

  return (
    <>
       <PDFViewer pdfUrl={pdfUrl} />
    </>
  
  );
};

export default Resume;
