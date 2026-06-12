
type ClickFunc = () => void;
export default function SolidButton(props: { text: string, className?: string, onClick?: ClickFunc} ) {
    const _def: ClickFunc = () => {};
    return <div className={`btn solid ${props.className ?? ""}`} onClick={props.onClick ?? _def}>
                    {props.text}
           </div>
}