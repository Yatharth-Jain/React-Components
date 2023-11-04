export const CollapsibleRightBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div
        className={`w-[250px] h-[75vh] absolute -translate-y-1/2 top-[55%] bg-white z-10 rounded-xl p-[20px] transition-all ${
          isOpen
            ? 'right-[10px] drop-shadow-lg'
            : 'right-[calc(-250px+20px)] opacity-30'
        }`}
        onClick={() => {
          if (!isOpen) setIsOpen(true);
        }}
      >
        <FontAwesomeIcon
          icon={faClose}
          className="h-6 w-h-6 absolute right-4 top-4"
          onClick={() => {
            setIsOpen(false);
          }}
        />
        
        <div className="w-full h-full overflow-auto">
  
        </div>
      </div>
    );
  };