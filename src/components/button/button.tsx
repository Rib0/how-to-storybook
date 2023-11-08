import React, { PropsWithChildren } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface Props extends PropsWithChildren {
    onClick?: VoidFunction,
    variant?: 'warning' | 'error' | 'default',
    size?: 'small' | 'medium' | 'large'
};

const Button: React.FC<Props> = ({ children, onClick, variant = 'default', size = 'medium' }) => {
    const className = cx(styles.button, styles[variant], styles[size]);

	return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
};

export default Button;
