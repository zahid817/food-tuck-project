// sanityClient.ts
import {config} from 'dotenv';
import { createClient } from '@sanity/client';


config()
export const client = createClient({
  projectId:"r20djf7l", // Replace with your project ID
  dataset: "production",        // Or your dataset name
  apiVersion: '2025-01-20',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: "skKR6R7kCG3H15Qj4UhGZL3zkDSwCCFrsKUeXkGs9eSyrmaHjbZPV4pkWe0aowJ88zeJgu6uMP7xZtW8rDLBhVNDmw9osFQsLg8LlVydzEF95E8wMkV300hsdrH7w9iB1P1qllTFw4oFju7MPAuADLve9aqJQ4SJijIEDlUzULEw12zefDZZ",
  
});