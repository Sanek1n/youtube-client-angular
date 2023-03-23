import mockData from './mock-data/response.json';
import ISearchItem from './models/search-item.model';
import { ISearchResponse } from './models/search-response.model';

export default class DataService {
  private data: ISearchResponse = mockData;

  getItems(): Array<ISearchItem> {
    return this.data.items;
  }
}
