interface Team {
  director: string,
  producer: string,
  scenario: string,
  operator: string,
  roles: string[]
}

export enum movieType {
  ALL = '',
  MOVIE = 'movie',
  SERIAL = 'serial',
}

export enum moviesYears {
  ALL = '',
  Y2020 = '2020',
  Y2010 = '2010',
  Y2000 = '2000',
  Y1990 = '1990',
}

export interface MovieSchema {
  id: string,
  titlePhoto: string,
  title: string,
  date: string,
  type: movieType,
  overview: string,
  team: Team,
  photos: string[],
}