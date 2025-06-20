import { Timeline } from "./ui/Timeline";
import { timelineData } from "../data/timelineData";
import { BackgroundBeams } from "./ui/BackgroundBeam";

export function Experience() {
  return (
    <div id="experiences"className="relative w-full overflow-clip scroll-mt-15">
      <Timeline data={timelineData} />
    </div>
  );
}
