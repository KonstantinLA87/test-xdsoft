interface Team {
  director: string,
  producer: string,
  scenario: string,
  operator: string,
  roles: string[]
}

export enum movieType {
  ALL = 'all',
  MOVIE = 'movie',
  SERIAL = 'сериал',
}

export enum moviesYears {
  ALL = 'all',
  Y2020 = '2020',
  Y2010 = '2010',
  Y2000 = '2000',
  Y1990 = '1990',
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