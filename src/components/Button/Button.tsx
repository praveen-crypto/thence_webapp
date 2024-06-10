
import { Button as MantineButton, ButtonProps, createPolymorphicComponent } from '@mantine/core';

import classes from './Button.module.scss';

import clsx from 'clsx';

import { forwardRef } from 'react';

interface ButtonProp extends ButtonProps {
    label: string | any;
    variantType: 'primary' | 'secondary' | 'success' | 'danger' | '';
}

const Button = createPolymorphicComponent<'button', ButtonProp>(
    forwardRef<HTMLButtonElement, ButtonProp>(({ label, variantType, className, ...props } ) => (
        <MantineButton className={ clsx( classes[variantType], className ) } {...props} >
            {label}
        </MantineButton>
    ))
);

export default Button;



//For Test

// Default root element is 'a', but it can be changed with 'component' prop
// const CustomButtonAnchor = createPolymorphicComponent<'a', ButtonProp>(
//     forwardRef<HTMLAnchorElement, ButtonProp>(({ label, variantType, className, ...props } ) => (
//         <MantineButton component="a" {...props} className={ clsx( classes[variantType], className ) } >
//             {label}
//         </MantineButton>
//     ))
// );

// const Button: React.FC<ButtonProp> = ({ label, variantType, className, isButton, ...props }) => {
//     return (
//         <CustomButton  />
//         // <MantineButton variant="filled" className={ clsx( classes[variantType], className ) } {...props} >
//         //     {label}
//         // </MantineButton>
//     );
// };