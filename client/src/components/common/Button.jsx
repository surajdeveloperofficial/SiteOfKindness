function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-emerald-500 hover:bg-emerald-600 text-white",
    secondary:
      "border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg px-5 py-2.5 font-medium transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;