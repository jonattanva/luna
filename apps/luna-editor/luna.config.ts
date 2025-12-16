import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'

import {
  defineConfig,
  defineInput,
  defineTextArea,
} from 'react-luna-form/config'

export default defineConfig({
  inputs: [defineInput(Input), defineTextArea(Textarea)],
})
