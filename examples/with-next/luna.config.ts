import { Input } from './components/ui/input'
import { Radio, RadioPrice } from './components/ui/radio-group'
import { Select } from './components/ui/native-select'
import { Textarea } from './components/ui/textarea'

import {
  defineConfig,
  defineInput,
  defineSelect,
  defineTextArea,
} from '@luna/react/config'

export default defineConfig({
  inputs: [
    defineInput(Input),
    defineTextArea(Textarea),
    defineSelect(Select),
    {
      types: ['radio'],
      input: Radio,
    },
    {
      types: ['radio/price'],
      input: RadioPrice,
    },
  ],
})
