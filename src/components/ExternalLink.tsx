type Props = {
  title: string;
  description: string;
  href: string;
};

export default function ExternalLink({ description, href, title }: Props) {
  return (
    <a
      className="inline-block rounded-md border border-gray-700 p-8 transition-colors hover:border-gray-400 text-xl font-semibold text-white"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {title}
      <span className="mt-2 max-w-[250px] text-gray-400">{description}</span>
    </a>
  );
}
