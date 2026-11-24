'use client';

import Link from 'next/link';
import { useState, useSyncExternalStore } from 'react';
import { Menu, SunMedium, X } from 'lucide-react';
import { CustomLogo } from '@/components/home/custom-logo';
import { useTheme } from 'fumadocs-ui/provider/base';
import { cn } from 'cn';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Moon02Icon,
  SunMediumIcon,
} from '@hugeicons/core-free-icons';

const navigation = [
  { href: '/', label: 'Início' },
  { href: '/docs', label: 'Blog' },
  { href: '/#sobre', label: 'Sobre' },
];

const iconButton =
  'inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground';


export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-10 border-b border-hairline bg-canvas">
      <div className="mx-auto flex h-16 max-w-300 items-center justify-between px-lg sm:px-xl">
        <Link className="flex items-center gap-xs text-base font-semibold tracking-[-0.04em] text-ink" href="/" aria-label="Ermerson, início">
          <CustomLogo width={50} height={50} />
        </Link>

        <nav className="hidden items-center gap-xxs sm:flex" aria-label="Navegação principal">
          {navigation.map(({ href, label }) => (
            <Link className="rounded px-sm py-xs text-body-md text-body transition-colors hover:font-medium hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link" href={href} key={label}>
              {label}
            </Link>
          ))}
          <a className="ml-sm inline-flex min-h-10 items-center gap-xs rounded-control bg-ink px-md text-button-md font-medium text-white transition-colors hover:bg-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link" href="#">
            Contato 
          </a>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="grid size-11 place-items-center rounded-control border border-hairline bg-elevated text-ink sm:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="absolute inset-x-0 top-full border-b border-hairline bg-canvas px-lg py-sm shadow-[0_1px_1px_rgba(0,0,0,0.04)] sm:hidden" aria-label="Navegação móvel">
          {navigation.map(({ href, label }) => (
            <Link className="block rounded-control px-md py-sm text-body-md text-body hover:bg-hairline-soft hover:text-ink" href={href} key={label} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <a className="mt-xs flex min-h-11 items-center justify-center gap-xs rounded-control bg-ink px-md text-button-md font-medium text-white" href="#">
            Contato 
          </a>
        </nav>
      )}
    </header>
  );
}

const subscribeNever = () => () => {};

export function ThemeToggle({ className }: { className?: string}) {
  const {theme, resolvedTheme, setTheme } = useTheme();

  const hydrated = useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  );

  if (!hydrated)
    return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={cn(iconButton, className)}
    >
      <HugeiconsIcon 
        icon={SunMediumIcon}
        strokeWidth={2}
        size={18}
        className="dark:hidden"
      />
      <HugeiconsIcon 
        icon={Moon02Icon}
        strokeWidth={2}
        size={18}
        className="hidden dark:block"
      />
    </button>
  );

  return(
    <div>
      <HugeiconsIcon 
          icon={SunMediumIcon}
          strokeWidth={2}
          size={18}
          className="dark:hidden"
        />
      <HugeiconsIcon 
        icon={Moon02Icon}
        strokeWidth={2}
        size={18}
        className="hidden dark:block"
        />
    </div>
  );
}