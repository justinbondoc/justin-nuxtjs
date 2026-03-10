const testimonialsModules = import.meta.glob('~/content/testimonials.json', {
  eager: true,
  import: 'default',
})

const first = Object.values(testimonialsModules)[0]
const testimonialsList = Array.isArray(first) ? first : []

export function getTestimonialsList() {
  return testimonialsList
}
