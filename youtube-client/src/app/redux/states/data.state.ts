import { ISearchItem } from '../../youtube/models/search-item.model';
import { ICard } from '../state.models';

export interface IDataState {
  searchData: ISearchItem[],
  cardsData: ICard[],
}

export const initialDataState: IDataState = {
  searchData: [],
  cardsData: [],
};
