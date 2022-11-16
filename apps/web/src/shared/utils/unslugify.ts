export function unslugify(slug: string) {
  return slug.replace(/\-/g, ' ')
}
