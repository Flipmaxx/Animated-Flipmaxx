'use client';

export default function Abouth() {
  return (
    <div className="min-h-full w-full bg-black px-4 py-12 md:py-20 rounded-xl">
      <div className="px-3 md:px-8 mx-auto flex flex-col gap-8">
        <p className="text-white text-base sm:text-lg md:text-xl font-light tracking-wide">
          Not the best digital marketing company in Bangalore but...
        </p>

        <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight md:leading-tight tracking-tight max-w-7xl">
          We're still creating ridiculously creative{' '}
          <span className="text-white/60">(but undeniably effective)</span>{' '}
          strategies that make your brand the envy of your competitors{' '}
          <span className="text-white/60">(while secretly fueling their nightmares)</span>
        </h1>
      </div>
      <p className="text-white/60 text-lg max-w-lg px-3 md:px-8 mt-16">
       <span className="text-white"> Our mission is simple:</span> We just don’t want to be another digital marketing company in Bangalore that gives you all the drama but not powerful strategies to scale.
      </p>
    </div>
  );
}
