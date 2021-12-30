import React, { ReactNode } from 'react';
import { ButtonProps as AntButtonProps } from 'antd/lib/button';
import * as styled from './styles';

export interface ButtonProps extends AntButtonProps {
  /**
   * Title of the button
   */
  title?: string;

  /**
   * Option to fit button width to its parent width
   *
   */
  block?: boolean;

  /**
   * Set the danger status of button
   *
   */
  danger?: boolean;

  /**
   * Disabled state of button
   *
   */
  disabled?: boolean;

  /**
   * Make background transparent and invert text and border colors
   *
   */
  ghost?: boolean;

  /**
   * Redirect url of link button
   */
  href?: string;

  /**
   * Set the original html type of button, see: MDN
   *
   */
  htmlType?: "button" | "submit" | "reset";

  /**
   * Set the icon component of button
   */
  icon?: ReactNode;

  /**
   * Set the loading status of button
   *
   */
  loading?: boolean | { delay: number };

  /**
   * Can be set button shape
   *
   */
  shape?: 'circle' | 'circle-outline' | 'round';

  /**
   * Set the size of button
   *
   */
  size?: 'large' | 'middle' | 'small';

  /**
   * Same as target attribute of a, works when href is specified
   */
  target?: string;

  /**
   * Can be set to primary ghost dashed link text default
   *
   */
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text' | 'ghost';

  /**
   * Set the handler to handle click event
   */
  onClick?: (event) => void;
}

export function Button(props: ButtonProps) {
  const { title } = props;
  return <styled.Button {...props}>{title}</styled.Button>;
}

export default (Button);

Button.defaultProps = {
  block: false,
  danger: false,
  disabled: false,
  ghost: false,
  htmlType: 'button',
  loading: false,
  size: 'middle',
  type: 'default'
}
