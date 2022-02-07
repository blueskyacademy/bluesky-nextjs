import { motion } from "framer-motion";
import useInView from "../hooks/useInView";

function AnimatedSlideInComponent({
  direction = "left",
  offset = 30,
  children,
}) {
  const [ref, inView] = useInView(30);

  const x = { target: "0%" };

  if (direction === "left") x.initial = "-150%";
  else x.initial = "150%";

  return (
    <motion.div
      initial={{ x: x.initial }}
      animate={{
        x: inView && x.target,
        transitionEnd: {
          x: inView && 0,
        },
      }}
      transition={{ type: "spring", damping: 19 }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
const AnimationRevealPage = ({ disabled, children }) => {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent
        key={i}
        direction={directions[i % directions.length]}
      >
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return (
    <div className="font-display min-h-screen text-secondary-500 overflow-hidden mt-3">
      {childrenWithAnimation}
    </div>
  );
};

export default AnimationRevealPage;
