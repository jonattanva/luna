import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Select } from './ui/native-select'

import {
  defineConfig,
  defineInput,
  defineSelect,
  defineTextArea,
} from '@luna/react/config'

export default defineConfig({
  inputs: [defineInput(Input), defineTextArea(Textarea), defineSelect(Select)],
})
