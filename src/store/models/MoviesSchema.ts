interface Team {
  director: string,
  producer: string,
  scenario: string,
  operator: string,
  roles: string[]
}

export enum movieType {
  MOVIE = 'Фильм',
  SERIAL = 'сериал',
}

export interface MovieSchema {
  id: string,
  titlePhoto: string,
  title: string,
  date: number,
  type: movieType,
  overview: string,
  team: Team,
  photos: string[],
}