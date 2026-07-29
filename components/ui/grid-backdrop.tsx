type GridBackdropProps = {
  className?: string;
};

export default function GridBackdrop({ className }: GridBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={["pointer-events-none absolute inset-0 -z-10", className]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundImage:
          "radial-gradient(rgba(17,17,17,0.09) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
        maskImage:
          "radial-gradient(ellipse 75% 65% at 50% 0%, black 35%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 75% 65% at 50% 0%, black 35%, transparent 100%)",
      }}
    />
  );
}
