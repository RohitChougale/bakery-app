import { Injectable } from '@angular/core';
import { Category } from '../interfaces/catagory-config.interface';
import { categories } from '../dummy-data/categories';

@Injectable({
  providedIn: 'root'
})
export class CatogoryService {

  constructor() { }

  getCategories():Category[]{
    return categories
  }
}
