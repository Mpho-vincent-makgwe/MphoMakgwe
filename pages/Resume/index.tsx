// Resume.js
import React from 'react';
import PDFViewer from '@/components/PDFViewer/PDFViewer';

const Resume = () => {
  const pdfUrl = `/CV/MPHO VINCENT MAKGWE JUNIOR SOFTWARE ENGINEER.pdf`;
  const pdfUrl2 = `/CV/Professional Minimalist CV Resume .pdf`;
  const pdfUrl3 = `/CV/SoftwareEngineerCVMphoVincent.pdf`;

  return (
    <>
       <PDFViewer pdfUrl={pdfUrl} />
       <PDFViewer pdfUrl={pdfUrl2} />
       <PDFViewer pdfUrl={pdfUrl3} />
    </>
  
  );
};

export default Resume;
