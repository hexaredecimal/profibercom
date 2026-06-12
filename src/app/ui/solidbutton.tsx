
export default function SolidButton(props: { text: string, className?: string} ) {
    return <div className={`btn solid ${props.className ?? ""}`}>
                    {props.text}
           </div>
}