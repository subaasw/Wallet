import classNames from "@/utils/classNames";

const IconButton = ({ className = "", children, onClick = () => {} }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames("icon_btn", className)}
    >
      {children}
    </button>
  );
};

export default IconButton;
