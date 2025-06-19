"use client";

import { GlowingEffect } from "./ui/GlowingEffect";

export function GridSection() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-4 xl:grid-cols-6 mx-15 ">
      <GridItem
        area="md:col-span-6 md:row-span-2 lg:col-span-4 lg:row-span-3 xl:col-span-3 xl:row-span-2"
        title="Do things the right way"
        description="Running out of copy so I'll write anything."
      />
      <GridItem
        area="md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-2 xl:col-span-3 xl:row-span-1"
        title="Do things the right way"
        description="Running out of copy so I'll write anything."
      />
      <GridItem
        area="md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-2 xl:col-span-3 xl:row-span-1"
        title="Do things the right way"
        description="Running out of copy so I'll write anything."
      />
      <GridItem
        area="md:col-span-6 md:row-span-2 lg:col-span-4 lg:row-span-3 xl:col-span-2 xl:row-span-2"
        title="Do things the right way"
        description="Running out of copy so I'll write anything."
      />
      <GridItem
        area="md:col-span-6 md:row-span-2 lg:col-span-4 lg:row-span-3 xl:col-span-4 xl:row-span-2"
        title="Do things the right way"
        description="Running out of copy so I'll write anything."
      />

    </ul>
  );
}

interface GridItemProps {
  className?: string;
  area: string;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area,title, description}: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area} xl:min-h-[14rem]`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
