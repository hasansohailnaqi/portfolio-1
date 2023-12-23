import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity-studio/schemas';

const config = defineConfig({
  projectId: "1zkhrsb1",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-12-19",
  
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config