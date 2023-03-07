export const getUrlByName = (name: string): string => {
  return useRouter().resolve({ name }).href
}
