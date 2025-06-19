import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {gridItems} from "../data/index";
export default function GridSection() {
  return (
    <section className="relative z-10 py-16">
        <BentoGrid>
            {gridItems.map((item) => (
                <BentoGridItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                />
            ))
          }
        </BentoGrid>
    </section>
  )
}
