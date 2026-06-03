import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/lib/blog-data";
import Image from "next/image";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, User } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog DICSSA`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.grupodicssa.mx/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHead: string[] = [];
  let key = 0;

  const flushTable = () => {
    if (!tableRows.length) return;
    elements.push(
      <div key={key++} className="overflow-x-auto my-8">
        <table className="w-full text-xs font-sans border-collapse">
          <thead>
            <tr className="bg-dicssa-yellow/10 border border-white/10">
              {tableHead.map((h, i) => (
                <th key={i} className="px-4 py-3 text-left font-black text-white uppercase tracking-wider border border-white/10">
                  {h.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, ri) => (
              <tr key={ri} className="border border-white/5 hover:bg-white/[0.02]">
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-gray-300 border border-white/5">
                    {cell.trim()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    tableHead = [];
    inTable = false;
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (line.startsWith("|")) {
      const cells = line.split("|").filter((_, i, arr) => i > 0 && i < arr.length - 1);
      if (!inTable) {
        inTable = true;
        tableHead = cells;
      } else if (cells.every((c) => /^[-: ]+$/.test(c))) {
        // separator row — skip
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      flushTable();
    }

    if (!line) { elements.push(<div key={key++} className="h-4" />); continue; }

    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-display font-black uppercase tracking-widest text-white mt-12 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-base font-sans font-black uppercase tracking-wider text-dicssa-yellow mt-8 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith("- **")) {
      const parts = line.slice(2);
      const boldEnd = parts.indexOf("**", 2);
      const bold = parts.slice(2, boldEnd);
      const rest = parts.slice(boldEnd + 2);
      elements.push(
        <li key={key++} className="flex items-start space-x-2 text-sm text-gray-300 mb-2">
          <span className="w-1.5 h-1.5 bg-dicssa-yellow rounded-full mt-2 shrink-0" />
          <span><strong className="text-white">{bold}</strong>{rest}</span>
        </li>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="flex items-start space-x-2 text-sm text-gray-300 mb-2">
          <span className="w-1.5 h-1.5 bg-dicssa-yellow rounded-full mt-2 shrink-0" />
          <span dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
        </li>
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={key++} className="border-white/10 my-10" />);
    } else {
      const html = line
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-dicssa-yellow hover:text-white underline underline-offset-2 transition-colors">$1</a>')
        .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white font-black'>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em class='italic text-gray-200'>$1</em>");
      elements.push(
        <p key={key++} className="text-sm text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: html }} />
      );
    }
  }
  if (inTable) flushTable();
  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prev = blogPosts[currentIndex - 1];
  const next = blogPosts[currentIndex + 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "DICSSA Infraestructura" },
    publisher: {
      "@type": "Organization",
      name: "DICSSA Infraestructura",
      logo: { "@type": "ImageObject", url: "https://www.grupodicssa.mx/logo.png" },
    },
    datePublished: post.date,
    image: `https://www.grupodicssa.mx${post.image}`,
    url: `https://www.grupodicssa.mx/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      {/* Hero imagen */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute inset-0 flex items-end justify-start">
          <div className="max-w-4xl mx-auto w-full px-6 pb-8">
            <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-dicssa-yellow uppercase tracking-widest mb-3">
              <Tag className="w-3 h-3" />
              <span>{post.category}</span>
            </span>
            <h1 className="text-2xl md:text-4xl font-sans font-black text-white leading-tight max-w-2xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-white/10 text-[11px] font-mono text-gray-400">
          <span className="flex items-center space-x-1.5"><User className="w-3.5 h-3.5 text-dicssa-yellow" /><span>{post.author}</span></span>
          <span className="flex items-center space-x-1.5"><Calendar className="w-3.5 h-3.5 text-dicssa-yellow" /><span>{post.date}</span></span>
          <span className="flex items-center space-x-1.5"><Clock className="w-3.5 h-3.5 text-dicssa-yellow" /><span>{post.readTime} min de lectura</span></span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {post.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-dicssa-dark border border-white/10 text-[9px] font-mono text-gray-400 uppercase tracking-widest rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Contenido */}
        <article className="prose-invert max-w-none">
          <div className="space-y-1">{renderContent(post.content)}</div>
        </article>

        {/* CTA inline */}
        <div className="mt-16 p-8 bg-dicssa-dark border border-dicssa-yellow/20 rounded-xl text-center">
          <h3 className="text-xl font-display font-black uppercase tracking-widest text-white mb-2">
            ¿TIENES UN PROYECTO VIAL?
          </h3>
          <p className="text-xs text-gray-400 mb-6 max-w-md mx-auto">
            Nuestros ingenieros están disponibles para asesorarte sin costo. Cuéntanos sobre tu proyecto.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-black text-xs uppercase tracking-widest rounded transition-all"
          >
            <span>Contactar a DICSSA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Navegación entre artículos */}
        <nav className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prev && (
            <a
              href={`/blog/${prev.slug}`}
              className="group flex flex-col p-5 bg-dicssa-dark border border-white/10 rounded-lg hover:border-dicssa-yellow/30 transition-all"
            >
              <span className="flex items-center space-x-1.5 text-[10px] font-mono text-gray-500 mb-2">
                <ArrowLeft className="w-3 h-3" />
                <span>Artículo anterior</span>
              </span>
              <span className="text-xs font-sans font-black text-white group-hover:text-dicssa-yellow transition-colors line-clamp-2">{prev.title}</span>
            </a>
          )}
          {next && (
            <a
              href={`/blog/${next.slug}`}
              className={`group flex flex-col p-5 bg-dicssa-dark border border-white/10 rounded-lg hover:border-dicssa-yellow/30 transition-all ${!prev ? "sm:col-start-2" : ""}`}
            >
              <span className="flex items-center justify-end space-x-1.5 text-[10px] font-mono text-gray-500 mb-2">
                <span>Siguiente artículo</span>
                <ArrowRight className="w-3 h-3" />
              </span>
              <span className="text-xs font-sans font-black text-white group-hover:text-dicssa-yellow transition-colors text-right line-clamp-2">{next.title}</span>
            </a>
          )}
        </nav>

        {/* Back */}
        <div className="mt-8 text-center">
          <a href="/blog" className="inline-flex items-center space-x-2 text-xs font-sans font-black text-gray-400 hover:text-dicssa-yellow uppercase tracking-widest transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Ver todos los artículos</span>
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
