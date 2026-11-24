import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Code2 } from 'lucide-react';
import { SiteHeader } from '@/components/layout/site-header';
import { source } from '@/lib/source';

export default function HomePage() {
  const articles = source.getPages();
  const featuredArticle = articles[0];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero relative isolate overflow-hidden border-b border-hairline">
          <div className="relative mx-auto grid min-h-140 max-w-300 items-center gap-3xl px-lg py-4xl sm:px-xl lg:grid-cols-[1.1fr_0.9fr] lg:gap-2xl lg:px-3xl lg:py-section">
            <div className="relative z-10 max-w-162.5">
              <p className="mb-lg font-mono text-mono-eyebrow font-medium uppercase text-body">Engenharia · carreira · tecnologia</p>
              <h1 className="max-w-155 text-[clamp(2.5rem,4vw,3rem)] leading-none tracking-[-0.15rem] font-semibold text-ink">
                Ideias práticas para construir uma carreira em tecnologia.
              </h1>
              <p className="mt-lg max-w-140 text-body-lg text-body">
                Sou Augusto Galego, engenheiro de software e educador. Escrevo sobre sistemas, algoritmos e o caminho de quem trabalha com tecnologia.
              </p>
              <div className="mt-xl flex flex-col gap-sm sm:flex-row">
                <Link className="inline-flex min-h-12 items-center justify-center gap-sm rounded-pill bg-ink px-lg text-base font-medium text-white transition-colors hover:bg-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link" href="/docs">
                  Explorar artigos <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <Link className="inline-flex min-h-12 items-center justify-center gap-sm rounded-pill border border-hairline bg-elevated px-lg text-base font-medium text-ink transition-colors hover:bg-hairline-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link" href="#sobre">
                  Sobre o autor
                </Link>
              </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-115 lg:ml-auto">
              <div className="rounded-card border border-hairline bg-elevated p-lg shadow-[0_1px_1px_rgba(0,0,0,0.04)] sm:p-xl">
                <div className="flex items-center justify-between gap-md border-b border-hairline pb-md">
                  <p className="font-mono text-mono-eyebrow font-medium uppercase text-mute">Comece por aqui</p>
                  <Code2 aria-hidden="true" className="size-4 text-mute" />
                </div>
                {featuredArticle ? (
                  <Link className="group block pt-lg" href={featuredArticle.url}>
                    <p className="text-body-sm text-mute">Artigo em destaque</p>
                    <h2 className="mt-sm text-heading-md font-semibold text-ink transition-colors group-hover:text-link">{featuredArticle.data.title}</h2>
                    <p className="mt-sm text-body-md text-body">{featuredArticle.data.description}</p>
                    <span className="mt-lg inline-flex items-center gap-xs text-button-md font-medium text-ink">
                      Ler artigo <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                ) : (
                  <p className="pt-lg text-body-md text-body">Novos artigos em breve.</p>
                )}
              </div>
              <p className="mt-sm text-center text-body-sm text-mute">Anotações feitas para aplicar no trabalho real.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-300 px-lg py-4xl sm:px-xl lg:px-3xl lg:py-section" aria-labelledby="articles-heading">
          <div className="mb-xl flex flex-col gap-md sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-xs font-mono text-mono-eyebrow font-medium uppercase text-mute">Do caderno</p>
              <h2 className="text-heading-lg font-semibold text-ink" id="articles-heading">Artigos e referências</h2>
            </div>
            <Link className="inline-flex min-h-11 items-center gap-xs self-start rounded-control px-sm text-button-md font-medium text-ink hover:bg-hairline-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link sm:self-auto" href="/docs">
              Ver todos <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          {articles.length > 0 ? (
            <div className="grid gap-md md:grid-cols-2">
              {articles.map((article) => (
                <Link className="group flex min-h-48 flex-col rounded-card border border-hairline bg-elevated p-lg transition-colors hover:border-[#d5d5d5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link sm:p-xl" href={article.url} key={article.url}>
                  <span className="font-mono text-mono-eyebrow uppercase text-mute">Artigo</span>
                  <h3 className="mt-md text-heading-md font-semibold text-ink transition-colors group-hover:text-link">{article.data.title}</h3>
                  <p className="mt-sm flex-1 text-body-md text-body">{article.data.description}</p>
                  <span className="mt-lg inline-flex items-center gap-xs text-button-md font-medium text-ink">
                    Continuar lendo <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-card border border-hairline bg-elevated p-lg text-body-md text-body sm:p-xl">
              Os primeiros artigos estão a caminho.
            </div>
          )}
        </section>

        <section className="border-y border-hairline bg-elevated" id="sobre" aria-labelledby="about-heading">
          <div className="mx-auto grid max-w-300 gap-xl px-lg py-4xl sm:px-xl lg:grid-cols-[1fr_auto] lg:items-center lg:px-3xl lg:py-4xl">
            <div className="max-w-175">
              <p className="mb-xs font-mono text-mono-eyebrow font-medium uppercase text-mute">Quem escreve</p>
              <h2 className="text-heading-lg font-semibold text-ink" id="about-heading">Da engenharia ao ensino, sempre com curiosidade.</h2>
              <p className="mt-md text-body-lg text-body">CTO e engenheiro backend, com mais de 10 anos de experiência e uma comunidade de tecnologia com 145 mil inscritos.</p>
            </div>
            <a className="inline-flex min-h-12 items-center justify-center gap-sm justify-self-start rounded-pill bg-ink px-lg text-base font-medium text-white transition-colors hover:bg-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link lg:justify-self-end" href="#">
              Fale comigo <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-300 flex-col gap-sm px-lg py-xl text-body-sm text-mute sm:flex-row sm:items-center sm:justify-between sm:px-xl lg:px-3xl">
        <Link className="font-medium text-body hover:text-ink" href="/">Augusto Galego</Link>
        <p>Escrito com curiosidade e café.</p>
      </footer>
    </>
  );
}

