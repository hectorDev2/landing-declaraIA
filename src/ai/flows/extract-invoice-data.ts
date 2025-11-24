'use server';

/**
 * @fileOverview An AI agent for extracting invoice data from an image.
 *
 * - extractInvoiceData - A function that handles the invoice data extraction process.
 * - ExtractInvoiceDataInput - The input type for the extractInvoiceData function.
 * - ExtractInvoiceDataOutput - The return type for the extractInvoiceData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractInvoiceDataInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of an invoice or receipt, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // prettier-ignore
    ),
});
export type ExtractInvoiceDataInput = z.infer<typeof ExtractInvoiceDataInputSchema>;

const ExtractInvoiceDataOutputSchema = z.object({
  ruc: z.string().describe('The RUC (Registro Único de Contribuyentes) number of the invoice.'),
  monto: z.string().describe('The total amount of the invoice.'),
  igv: z.string().describe('The IGV (Impuesto General a las Ventas) amount of the invoice.'),
});
export type ExtractInvoiceDataOutput = z.infer<typeof ExtractInvoiceDataOutputSchema>;

export async function extractInvoiceData(input: ExtractInvoiceDataInput): Promise<ExtractInvoiceDataOutput> {
  return extractInvoiceDataFlow(input);
}

const extractInvoiceDataPrompt = ai.definePrompt({
  name: 'extractInvoiceDataPrompt',
  input: {schema: ExtractInvoiceDataInputSchema},
  output: {schema: ExtractInvoiceDataOutputSchema},
  prompt: `You are an expert AI assistant specialized in extracting data from invoices and receipts from Peruvian businesses.

You will receive an image of an invoice or receipt and your task is to extract the following information:
- RUC (Registro Único de Contribuyentes)
- Monto (Total Amount)
- IGV (Impuesto General a las Ventas)

Use the following as the primary source of information:

Invoice/Receipt Image: {{media url=photoDataUri}}

Return the extracted information in JSON format.

Make sure to extract only the correct data from the image, don't fill in missing data.
`,
});

const extractInvoiceDataFlow = ai.defineFlow(
  {
    name: 'extractInvoiceDataFlow',
    inputSchema: ExtractInvoiceDataInputSchema,
    outputSchema: ExtractInvoiceDataOutputSchema,
  },
  async input => {
    const {output} = await extractInvoiceDataPrompt(input);
    return output!;
  }
);
