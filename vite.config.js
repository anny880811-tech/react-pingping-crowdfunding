import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig(({mode})=>{
return{
  base:mode ==='production'?'react-pingping-crowdfunding':'/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
}
})
