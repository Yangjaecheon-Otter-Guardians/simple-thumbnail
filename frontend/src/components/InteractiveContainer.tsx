interface Props {
  children: React.ReactNode;
}

function InteractiveContainer({ children }: Props) {
  return (
    <div className="w-11/12 flex flex-col items-center justify-center sm:w-[640px] md:w-[768px] lg:w-1024">
      {children}
    </div>
  );
}

export default InteractiveContainer;
