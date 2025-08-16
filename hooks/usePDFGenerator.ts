import { generatePDF } from '@/lib/pdf-generator';
import { TableRow } from '../types/production';

export const usePDFGenerator = () => {
  const handleGeneratePDF = (tableData: TableRow[]) => {
    generatePDF(tableData);
  };

  return { generatePDF: handleGeneratePDF };
};