import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps {}
 
 export function MeuCheckbox({}: CheckboxProps) {
    return (
       <Checkbox.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'>
          <Checkbox.Indicator asChild>
            <Check weight='bold' className='h-5 w-5 text-cyan-500' />
          </Checkbox.Indicator>
       </Checkbox.Root>
    )
 }