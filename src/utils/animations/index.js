import { motion } from "framer-motion";

export const AnimatedElement = ({ id, children, className, element }) => {
  const parent = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const MotionComponent = motion[element];

  return (
    <MotionComponent
      className={className}
      id={id}
      variants={parent}
      initial="hidden"
      whileInView="visible"
    >
      {children}
    </MotionComponent>
  );
};
