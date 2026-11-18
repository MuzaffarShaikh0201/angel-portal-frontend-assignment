import { Children, useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import styles from './Carousel.module.css';

type PerView = { base: number; sm?: number; md?: number; lg?: number };

type CarouselProps = {
  label: string;
  perView: PerView;
  children: ReactNode;
};

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Carousel({ label, perView, children }: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const targetLeftRef = useRef<number | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    if (targetLeftRef.current !== null && Math.abs(track.scrollLeft - targetLeftRef.current) < 2) {
      targetLeftRef.current = null; // arrived
    }
    setCanPrev(track.scrollLeft > 1);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [updateArrows]);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;

    const step = first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || '0');
    const maxLeft = track.scrollWidth - track.clientWidth;
    // if a smooth scroll is still running, step from where it is heading
    const from = targetLeftRef.current ?? track.scrollLeft;
    const current = from >= maxLeft - 1 ? Math.ceil(maxLeft / step) : Math.round(from / step);
    const left = Math.min(Math.max((current + direction) * step, 0), maxLeft);

    targetLeftRef.current = left;
    track.scrollTo({ left, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  const perViewVars = {
    '--per-view-base': perView.base,
    '--per-view-sm': perView.sm ?? perView.base,
    '--per-view-md': perView.md ?? perView.sm ?? perView.base,
    '--per-view-lg': perView.lg ?? perView.md ?? perView.sm ?? perView.base,
  } as CSSProperties;

  return (
    <div
      className={styles.carousel}
      style={perViewVars}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <ul ref={trackRef} className={styles.track} onScroll={updateArrows}>
        {Children.map(children, (child) => (
          <li className={styles.slide}>{child}</li>
        ))}
      </ul>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Previous"
          disabled={!canPrev}
          onClick={() => move(-1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Next"
          disabled={!canNext}
          onClick={() => move(1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
