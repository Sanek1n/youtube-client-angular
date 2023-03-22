import mockData from './mock-data/response.json';
import ISearchItem from './search/search-item.model';
import { ISearchResponse } from './search/search-response.model';

export default class DataService {
  private data: ISearchResponse = mockData;

  getItems(): Array<ISearchItem> {
    return this.data.items;
  }
}
