export interface ItvShowData {
  show: {
    url: string,
    name: string,
    language: string,
    genres: string,
    rating: {
      average: number
    },
    image: {
      medium: string
    },
    summary: string
  }
}
