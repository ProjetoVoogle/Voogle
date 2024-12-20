interface ButtonProps {
    label: string;
    onBtnClick?: () => void;
    className?: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ label, onBtnClick, className }) => {
    return (
      <div
        onClick={onBtnClick}
        className={`border-2 border-[#44537A] text-[#44537A] px-4 py-1 lg:py-1 lg:px-5 md:py-1 md:px-5 sm:py-1 sm:px-5  hover:bg-[#44537A] hover:text-white transition duration-300 text-center max-w-fit font-bold shadow-[0px_3px_8px_rgba(0,0,0,0.24)] cursor-pointer ${className}`}
      >
        <p>{label}</p>
      </div>
    );
  };
  
  export default Button;
  