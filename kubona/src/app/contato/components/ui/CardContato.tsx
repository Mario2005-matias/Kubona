

type CardProps = {
    nome: string
    info1: string
    info2: string
    children: React.ReactNode
}

export default function CardContato({children, nome, info1, info2}: CardProps) {
  return (
    <div className="flex flex-col items-start justify-center mb-4">
      <span className="p-2 border rounded-sm  mb-4" aria-label={nome}>
        {children}
      </span>
      <ul>
        <li>{info1}</li>
        <li>{info2}</li>
      </ul>
    </div>
  );
}
