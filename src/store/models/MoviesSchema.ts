export interface Team {
  director: string,
  producer: string,
  scenario: string,
  operator: string,
  roles: string[]
}

export interface MovieSchema {
  id: string,
  titlePhoto: string,
  title: string,
  date: string,
  type: string,
  overview: string,
  team: Team,
  photos: string[],
}