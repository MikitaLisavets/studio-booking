type Props = {
  if: boolean;
  children: JSX.Element;
}

export default function Display(props: Props): JSX.Element | null {
  return props.if ? props.children : null;
}