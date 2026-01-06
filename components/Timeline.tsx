"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/* LOCAL TYPE (NO @/types) */
interface TimelineItem {
  title: string;
  institution: string;
  yearRange: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-2 top-0 bottom-0 w-px bg-primary/40" />

      <div className="space-y-10 pl-6">
        {items.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative">
      <span className="absolute -left-[14px] top-2 w-3 h-3 bg-primary rounded-full" />

      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-textMuted">{item.institution}</p>
      <p className="text-sm text-textMuted">{item.yearRange}</p>
    </motion.div>
  );
}
