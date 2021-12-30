declare module 'react-split' {
  export interface ReactSplitProps {
    sizes?: number[];
    minSize?: number | number[];
    expandToMin?: boolean;
    gutterSize?: number;
    gutterAlign?: 'center' | 'start' | 'end';
    snapOffset?: number;
    dragInterval?: number;
    direction?: 'horizontal' | 'vertical';
    cursor?: string;
    gutter?: (index: number, direction: string) => HTMLElement;
    elementStyle?: (
      dimension: string,
      elementSize: number,
      gutterSize: number,
      index: number,
    ) => Record<string, unknown>;
    gutterStyle?: (dimension: string, gutterSize: number, index: number) => Record<string, unknown>;
    onDrag?: (sizes: number[]) => void;
    onDragStart?: (sizes: number[]) => void;
    onDragEnd?: (sizes: number[]) => void;
  }
  // declare type Props = React.PropsWithChildren<ReactSplitProps>;
  // export declare function ReactSplit(props: Props): JSX.Element;
  // declare const _default: typeof ReactSplit;
  // export default _default;
}
