
/*
export default function MyButton({ title }: {title:string}) {
  return (
    <button>{title}</button>
  )
}
*/
interface MyButtonProps {
  title: string;
  disabled?: boolean;
}

export default function MyButton({ title, disabled=false }: MyButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  )
}