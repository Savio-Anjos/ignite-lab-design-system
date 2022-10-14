import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends Checkbox.CheckboxProps {}
 
 export function MeuCheckbox(props: CheckboxProps) {
    return (
       <Checkbox.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded' {...props}>
          <Checkbox.Indicator asChild>
            <Check weight='bold' className='h-5 w-5 text-cyan-500' />
          </Checkbox.Indicator>
       </Checkbox.Root>
    )
 }