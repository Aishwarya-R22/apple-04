import assets from "../data/assets.json";
export function Media({
  id,
  alt = "",
  className = "",
  eager = false,
  ...props
}) {
  const a = assets[id];
  return a ? (
    <img
      src={`${import.meta.env.BASE_URL}images/${a.file}`}
      width={a.width}
      height={a.height}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      {...props}
    />
  ) : null;
}
export function AppleMark() {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 24 28"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.2 0c.2 2.1-.6 4-1.8 5.3-1.2 1.3-3 2.2-4.8 2 .1-2 1-3.8 2.2-5.1C14.1.9 16 .1 17.2 0ZM21.9 20.3c-.6 1.4-.9 2-1.7 3.2-1.1 1.6-2.6 3.6-4.5 3.6-1.7 0-2.1-1.1-4.4-1.1-2.2 0-2.8 1.1-4.4 1.1-1.9 0-3.3-1.8-4.4-3.4C-.5 19.1-1 12.6 1 9.6c1.4-2.1 3.5-3.3 5.5-3.3 1.8 0 3 1.1 4.5 1.1 1.4 0 2.4-1.1 4.5-1.1 1.7 0 3.5.9 4.9 2.5-4.3 2.4-3.6 8.7 1.5 11.5Z" />
    </svg>
  );
}
