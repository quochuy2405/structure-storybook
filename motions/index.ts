export const scrollSpring = (index: number) => ({
  initial: 'offscreen',
  whileInView: 'onscreen',
  viewport: { once: true, amount: 0.2 },
  variants: {
    offscreen: {
      y: 100
    },
    onscreen: {
      y: 1,

      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 0.2 + index
      }
    }
  }
})

export const showUp = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    duration: 0.9,
    delay: 0,
    ease: [0, 0.71, 0.2, 1.1]
  }
}
