export interface IGetRentMovie {
  id: number;
  id_movie: number;
  id_costumer: number;
  loan_date: string;
  devolution_date: string;
  amount: number;
  price: number;
  subTotal: number;
  total: number;

  movie: {
      id: number;
      title: string;
      duration: string;
      director: string;
      language: string;
      image: string;
      ranking: string;
      generoId: number;
      state: boolean;
      
    };

   
  
  cliente: {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    age: string;
    state: boolean;
  };
}

export interface ICreateRentMovie {
  id_movie: number;
  id_costumer: number;
  devolution_date: string;
  amount: number;
  price: number;
}

export interface IUpdateRentMovie {
  id: number;
  id_movie: number;
  id_costumer: number;
  devolution_date: string;
  amount: number;
  price: number;
}

export interface RentMovieState {
  rentmovie: IGetRentMovie[]
  OnGetRentMovie: () => Promise<void>;
  OnCreateRentMovie: (rentmovie: ICreateRentMovie) => Promise<void>;
  OnUpdateRentMovie: (id: number, rentmovie: IUpdateRentMovie) => Promise<void>;
  OnDeleteRentMovie: (id: number) => Promise<void>;
}
