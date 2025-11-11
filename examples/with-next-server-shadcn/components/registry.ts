import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select } from './ui/select';
import { Textarea } from './ui/textarea';
import { setInputComponent } from '@luna/react/server';

setInputComponent(Input, ['text', 'number'])
setInputComponent(Select, ['select', 'select/year'])
setInputComponent(Textarea, ['textarea'])

setInputComponent(Button, ['button', 'button/submit'])