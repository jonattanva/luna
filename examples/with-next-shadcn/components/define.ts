import { Input } from './ui/input'
import { Select } from './ui/native-select'
import { Textarea } from './ui/textarea'
import {
  defineConfig,
  defineInput,
  defineSelect,
  defineTextArea,
} from '@luna/react/client'

export default defineConfig({
  inputs: [defineInput(Input), defineTextArea(Textarea), defineSelect(Select)],
})
