import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Breadcrumbs accesibles con datos estructurados Schema.org (BreadcrumbList).
 * El último elemento es la página actual (sin href).
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const base = "https://www.grupodicssa.mx";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${base}${c.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Ruta de navegación" className="max-w-7xl mx-auto px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-gray-500">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {c.href ? (
              <a href={c.href} className="hover:text-dicssa-yellow transition-colors">{c.label}</a>
            ) : (
              <span className="text-dicssa-yellow" aria-current="page">{c.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight className="w-3 h-3 text-gray-700" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
