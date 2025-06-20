import { Timeline } from "./ui/Timeline";
import { timelineData } from "../data/timelineData";

export function TimelineDemo() {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineData} />
    </div>
  );
}
