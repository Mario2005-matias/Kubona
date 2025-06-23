

type ContatoType = {
  id: number;
  icon: React.ReactNode;
  nome: string;
  info1: string;
  info2: string;
};

export default function CardContato({
  nome,
  icon,
  info1,
  info2,
}: {
  nome: string;
  icon: React.ReactNode;
  info1: string;
  info2: string;
}) {
  return (
    <div className="flex flex-col items-start justify-center mb-4">
      <span className="p-2 border rounded-sm  mb-4" aria-label={nome}>
        {icon}
      </span>
      <ul>
        <h3 className="font-bold text-base">{nome}</h3>
        <li>{info1}</li>
        <li>{info2}</li>
      </ul>
    </div>
  );
}
