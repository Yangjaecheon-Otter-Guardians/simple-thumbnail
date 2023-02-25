interface Props {
  children: React.ReactNode;
}

function InteractiveContainer({ children }: Props) {
  return (
    <div className="px-5 w-full flex flex-col items-center justify-center sm:w-[640px] md:px-10 md:w-[768px]">
      {children}
    </div>
  );
}

export default InteractiveContainer;
