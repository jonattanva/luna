import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { defineConfig, defineInput, defineTextArea } from '@luna/react/client'

export default defineConfig({
  inputs: [defineInput(Input), defineTextArea(Textarea)],
})
