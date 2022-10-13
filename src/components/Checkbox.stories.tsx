import {Meta, StoryObj} from '@storybook/react';
import { MeuCheckbox, CheckboxProps } from "./MeuCheckbox";
import { Text } from './Text';

 export default {
    title: 'Components/Checkbox',
    component: MeuCheckbox,
    args: {},
    argTypes: {},
    decorators: [
      (Story) => {
        return (
          <div className='flex items-center gap-2'>
            {Story()}
            <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
          </div>
        )
      }
    ]

} as Meta<CheckboxProps>

  export const Default: StoryObj< CheckboxProps> = {}
 