import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Select } from './components/ui/native-select'

import {
  defineConfig,
  defineInput,
  defineSelect,
  defineTextArea,
} from '@luna/react/config'

export default defineConfig({
  inputs: [defineInput(Input), defineTextArea(Textarea), defineSelect(Select)],
})
