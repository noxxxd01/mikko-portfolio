export default function OpenToWorkTick() {
  return (
    <div className="">
      {/* Pulsing Dot */}
      <div className="relative flex items-center justify-center">
        {/* Outer tick pulse */}
        <div className="absolute h-3 w-3 rounded-full bg-green-500 opacity-75 animate-tickpulse"></div>
        {/* Inner static dot */}
        <div className="relative h-2.5 w-2.5 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
}
