import { Timeline } from "./ui/Timeline";
import { timelineData } from "../data/timelineData";

export function Experience() {
  return (
    <div id="experiences"className="relative w-full overflow-clip">
      <Timeline data={timelineData} />
    </div>
  );
}
