type CrosshairProps = {
  className?: string;
};

export default function Crosshair({ className }: CrosshairProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={["h-4 w-4", className].filter(Boolean).join(" ")}
    >
      <path
        d="M8 0V5.5M8 10.5V16M0 8H5.5M10.5 8H16"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
