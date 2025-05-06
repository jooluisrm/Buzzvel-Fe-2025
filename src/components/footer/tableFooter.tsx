// components/TableFooter.tsx

import FooterColumn from "./footerColumn";


const columns = [
  {
    title: 'Product',
    items: [
      { label: 'Pricing', href: '#' },
      { label: 'Overview', href: '#' },
      { label: 'Browse', href: '#' },
      { label: 'Accessibility', href: '#', badge: 'BETA' },
    ],
  },
  {
    title: 'Solutions',
    items: [
      { label: 'Brainstorming', href: '#' },
      { label: 'Ideation', href: '#' },
      { label: 'Wireframing', href: '#' },
      { label: 'Research', href: '#' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Help Center', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Contact Us', href: '#' },
      { label: 'Developers', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Integrations', href: '#' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Events', href: '#' },
      {
        label: 'Request Demo',
        href: '#',
        trailing: <span>→</span>,
      },
    ],
  },
];

export default function TableFooter() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-[48px] text-white text-sm w-full">
      {columns.map((col) => (
        <FooterColumn key={col.title} title={col.title} items={col.items} />
      ))}
    </div>
  );
}
