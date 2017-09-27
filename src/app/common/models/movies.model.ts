export interface IGenres {
  id?: number;
  name?: string;
}

export interface ICompanies {
  id?: number;
  name?: string;
}

export interface ICountries {
  iso_3166_1?: string;
  name?: string;
}

export interface ILanguages {
  iso_639_1?: string;
  name?: string;
}

export interface IMovies {
  page: number;
  results: Array<Object>;
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: IGenres[];
  homepage: any;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ICompanies[];
  production_countries: ICountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ILanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
