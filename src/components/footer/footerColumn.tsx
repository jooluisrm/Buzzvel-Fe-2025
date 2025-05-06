// components/FooterColumn.tsx
type Item = {
    label: string;
    href: string;
    badge?: string;        // texto do selo opcional (ex.: "BETA")
    trailing?: React.ReactNode; // ícone ou símbolo depois do link
  };
  
  type Props = {
    title: string;
    items: Item[];
  };
  
  export default function FooterColumn({ title, items }: Props) {
    return (
      <div>
        <h4 className="font-semibold mb-2">{title}</h4>
        <ul className="space-y-1 my-3">
          {items.map(({ label, href, badge, trailing }) => (
            <li key={label}>
              <a href={href} className="inline-flex items-center gap-4 text-[#E2E8F0] my-1">
                {label}
                {badge && (
                  <span className="ml-1 inline-block text-xs bg-purple-200 text-purple-800 px-1 rounded">
                    {badge}
                  </span>
                )}
                {trailing}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  