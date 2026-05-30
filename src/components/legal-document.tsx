type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string }
  | { type: "email"; address: string; label?: string };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

type LegalDocumentProps = {
  sections: LegalSection[];
};

function renderBlock(block: LegalBlock, index: number) {
  if (block.type === "paragraph") {
    return (
      <p key={index} className="leading-7">
        {block.text}
      </p>
    );
  }

  if (block.type === "email") {
    return (
      <p key={index} className="leading-7">
        {block.label ? `${block.label} ` : null}
        <a href={`mailto:${block.address}`} className="text-(--accent) underline-offset-2 hover:underline">
          {block.address}
        </a>
      </p>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3 key={index} className="text-base font-semibold text-(--text-strong)">
        {block.text}
      </h3>
    );
  }

  return (
    <ul key={index} className="list-disc space-y-2 pl-6 leading-7">
      {block.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalDocument({ sections }: LegalDocumentProps) {
  return (
    <div className="mt-8 space-y-10 text-(--text-muted)">
      {sections.map((section) => (
        <section key={section.title} className="space-y-4">
          <h2 className="text-lg font-semibold text-(--text-strong)">{section.title}</h2>
          <div className="space-y-4">{section.blocks.map(renderBlock)}</div>
        </section>
      ))}
    </div>
  );
}
