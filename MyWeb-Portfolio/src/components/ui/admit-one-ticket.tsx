import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { Dithering } from "@paper-design/shaders-react";
import type { DitheringShape, DitheringType } from "@paper-design/shaders";

// All geometry and layout values are fractions of the ticket width,
// measured from a 741px-wide reference design.
const REF = 741;

export const TICKET_GEOMETRY = {
  aspect: 741 / 425,
  cornerRadius: 25 / REF,
  notchRadius: 21 / REF,
  perforation: 562 / REF,
};

const LAYOUT = {
  padding: 57 / REF,
  labelTop: 58 / REF,
  labelSize: 19.72 / REF,
  labelLead: 28 / REF,
  nameTop: 185 / REF,
  nameSize: 64.79 / REF,
  nameLead: 65 / REF,
  footerTop: 348 / REF,
  footerSize: 19.72 / REF,
  stubSize: 67.61 / REF,
  watermarkSize: 144 / REF,
  inkColor: "#5a3520",
  watermarkColor: "#ffdcbe",
};

export interface TicketTexture {
  colorBack: string;
  colorFront: string;
  shape: DitheringShape;
  type: DitheringType;
  size: number;
  speed: number;
}

export const TICKET_TEXTURE: TicketTexture = {
  colorBack: "#ef671c",
  colorFront: "#ffc691",
  shape: "warp",
  type: "random",
  size: 0.5,
  speed: 0.4,
};

export function ticketClipPath(width: number, height: number, geometry = TICKET_GEOMETRY): string {
  const r = geometry.cornerRadius * width;
  const n = geometry.notchRadius * width;
  const p = geometry.perforation * width;
  return [
    `M ${r} 0`,
    `L ${p - n} 0`,
    `A ${n} ${n} 0 0 0 ${p + n} 0`,
    `L ${width - r} 0`,
    `A ${r} ${r} 0 0 0 ${width} ${r}`,
    `L ${width} ${height - r}`,
    `A ${r} ${r} 0 0 0 ${width - r} ${height}`,
    `L ${p + n} ${height}`,
    `A ${n} ${n} 0 0 0 ${p - n} ${height}`,
    `L ${r} ${height}`,
    `A ${r} ${r} 0 0 0 0 ${height - r}`,
    `L 0 ${r}`,
    `A ${r} ${r} 0 0 0 ${r} 0`,
    "Z",
  ].join(" ");
}

// Up to `max` lines, one word per line; extra words join the last line.
function splitName(name: string, max = 3): string[] {
  const words = name.trim().toUpperCase().split(/\s+/).filter(Boolean);
  const lines = words.slice(0, max);
  if (words.length > max) lines[max - 1] = words.slice(max - 1).join(" ");
  return lines;
}

// Shrinks the name so its longest line and total height fit the space left of the perforation.
function fitNameScale(lines: string[], width: number): number {
  if (lines.length === 0) return 1;
  const fontSize = LAYOUT.nameSize * width;
  const availableWidth = (TICKET_GEOMETRY.perforation - LAYOUT.padding - 0.03) * width;
  const availableHeight = (LAYOUT.footerTop - LAYOUT.nameTop - 0.02) * width;
  const longest = Math.max(...lines.map((line) => line.length));
  const byWidth = availableWidth / (longest * 0.59 * fontSize);
  const byHeight = availableHeight / (lines.length * LAYOUT.nameLead * width);
  return Math.max(0.05, Math.min(1, byWidth, byHeight));
}

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(MOTION_QUERY);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(MOTION_QUERY).matches,
    () => false,
  );
}

export interface TicketCardProps {
  name: string;
  presenter: string;
  event: string;
  venue: string;
  dates: string;
  stubText: string;
  watermark: string;
  width?: number;
  texture?: TicketTexture;
  className?: string;
}

export function TicketCard({
  name,
  presenter,
  event,
  venue,
  dates,
  stubText,
  watermark,
  width = REF,
  texture = TICKET_TEXTURE,
  className = "",
}: TicketCardProps) {
  const height = width / TICKET_GEOMETRY.aspect;
  const perfX = TICKET_GEOMETRY.perforation * width;
  const isReducedMotion = usePrefersReducedMotion();
  const lines = splitName(name);
  const nameScale = fitNameScale(lines, width);
  const stubBox: CSSProperties = { left: perfX, top: 0, width: width - perfX, height };

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ width, height, clipPath: `path('${ticketClipPath(width, height)}')` }}
    >
      <div className="absolute inset-0" style={{ background: texture.colorBack }} />
      <Dithering
        colorBack={texture.colorBack}
        colorFront={texture.colorFront}
        shape={texture.shape}
        type={texture.type}
        size={texture.size}
        speed={isReducedMotion ? 0 : texture.speed}
        style={{ position: "absolute", inset: 0, width, height }}
      />

      {/* perforation */}
      <div
        className="absolute inset-y-0"
        style={{
          left: perfX,
          width: Math.max(1, 0.0022 * width),
          backgroundImage: `repeating-linear-gradient(to bottom, ${LAYOUT.inkColor}55 0 ${0.012 * width}px, transparent ${0.012 * width}px ${0.024 * width}px)`,
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute grid place-items-center font-bold tabular-nums"
        style={{ ...stubBox, color: LAYOUT.watermarkColor, opacity: 0.6 }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            fontSize: LAYOUT.watermarkSize * width,
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          {watermark}
        </span>
      </div>

      <div className="absolute inset-0" style={{ color: LAYOUT.inkColor }}>
        <div
          className="absolute uppercase"
          style={{
            left: LAYOUT.padding * width,
            top: LAYOUT.labelTop * width,
            fontSize: LAYOUT.labelSize * width,
            lineHeight: `${LAYOUT.labelLead * width}px`,
            letterSpacing: "0.016em",
          }}
        >
          <div>{presenter}</div>
          <div>{event}</div>
        </div>
        <div
          className="absolute font-medium"
          style={{
            left: LAYOUT.padding * width,
            top: LAYOUT.nameTop * width,
            fontSize: LAYOUT.nameSize * width * nameScale,
            lineHeight: `${LAYOUT.nameLead * width * nameScale}px`,
            letterSpacing: "-0.01em",
          }}
        >
          {lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
        <div
          className="absolute whitespace-nowrap uppercase"
          style={{
            left: LAYOUT.padding * width,
            top: LAYOUT.footerTop * width,
            fontSize: LAYOUT.footerSize * width,
            letterSpacing: "0.016em",
          }}
        >
          {venue} · {dates}
        </div>
        <div
          className="absolute grid place-items-center font-medium whitespace-nowrap uppercase"
          style={{ ...stubBox, fontSize: LAYOUT.stubSize * width, opacity: 0.88 }}
        >
          <span style={{ writingMode: "vertical-rl" }}>{stubText}</span>
        </div>
      </div>
    </div>
  );
}

interface TiltCardProps {
  children: ReactNode;
  clipPath: string;
  maxTilt?: number;
  scale?: number;
  glare?: number;
}

const REST_TRANSFORM = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";

// Pointer-driven 3D tilt with a soft glare that follows the cursor.
export function TiltCard({ children, clipPath, maxTilt = 9, scale = 1.02, glare = 0.16 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isReducedMotion = usePrefersReducedMotion();

  const onMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el || isReducedMotion || e.pointerType !== "mouse") return;
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - rect.left) / rect.width - 0.5;
      const dy = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1200px) rotateX(${-dy * 2 * maxTilt}deg) rotateY(${dx * 2 * maxTilt}deg) scale(${scale})`;
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(38% 55% at ${(dx + 0.5) * 100}% ${(dy + 0.5) * 100}%, rgba(255,255,255,${glare}) 0%, rgba(255,255,255,0) 70%)`;
      }
    },
    [isReducedMotion, maxTilt, scale, glare],
  );

  const onLeave = useCallback(() => {
    setIsHovering(false);
    if (cardRef.current) cardRef.current.style.transform = REST_TRANSFORM;
    if (glareRef.current) glareRef.current.style.background = "transparent";
  }, []);

  return (
    <div
      ref={cardRef}
      onPointerEnter={() => setIsHovering(true)}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative w-fit will-change-transform"
      style={{
        transition: isHovering ? "none" : "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
        transform: REST_TRANSFORM,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      {glare > 0 && (
        <div
          ref={glareRef}
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ clipPath, transition: isHovering ? "none" : "background 420ms ease-out" }}
        />
      )}
    </div>
  );
}

export interface AdmitOneTicketProps extends TicketCardProps {
  tilt?: false | Omit<TiltCardProps, "children" | "clipPath">;
}

export function AdmitOneTicket({ tilt, ...props }: AdmitOneTicketProps) {
  if (tilt === false) return <TicketCard {...props} />;
  const width = props.width ?? REF;
  return (
    <TiltCard clipPath={`path('${ticketClipPath(width, width / TICKET_GEOMETRY.aspect)}')`} {...tilt}>
      <TicketCard {...props} />
    </TiltCard>
  );
}

export default AdmitOneTicket;
