/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })

// sanityClient.ts
// import dotenv from "dotenv"

// dotenv.config()
// export const client = createClient({
//   projectId:"82txzobm", // Replace with your project ID
//   dataset: 'production',        // Or your dataset name
//   apiVersion: '2024-01-04',     // Today's date or latest API version
//   useCdn: false,                // Disable CDN for real-time updates
//   token:"skrRZck8Hjila3jVqmsRXtaHbJPtahRX2yzmBraPYAewnbndZQdqIwXwgE0653FCytDipocZ0hR0dnjQL3HP6wNMwKiPaM3ckbE7d0l7QOpoXQiJWHynQkrrCnPPYdkm87JIIphhvnTPDnt976pU2jJPtgHXHUHQjfNn7tPUGYDHAQPwaw8M",

