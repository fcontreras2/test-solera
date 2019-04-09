import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { ICategory } from "@core/models/category";
import { IService } from "@core/models/service";
import { ApiService } from "./api.service";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  public categories$: BehaviorSubject<ICategory[]>;
  public services$: BehaviorSubject<IService[]>;
  public filter$: BehaviorSubject<Number>;
  public loading$: BehaviorSubject<Boolean>;

  constructor(
    private apiService: ApiService,
    private localStorage: LocalStorageService
  ) {
    this.categories$ = new BehaviorSubject<ICategory[]>([]);
    this.services$ = new BehaviorSubject<IService[]>([]);
    this.filter$ = new BehaviorSubject<Number>(null);
    this.loading$ = new BehaviorSubject<Boolean>(false);
  }

  get categories() {
    return this.categories$.asObservable();
  }

  setCategories(categories: ICategory[]) {
    this.categories$.next(categories);
  }

  get services() {
    return this.services$.asObservable();
  }

  setServices(services: IService[]) {
    this.services$.next(services);
  }

  get filter() {
    return this.filter$.asObservable();
  }

  setFilter(filter: Number) {
    this.filter$.next(filter);
  }

  get loading() {
    return this.loading$.asObservable();
  }

  setLoading(loading: Boolean) {
    if (loading) {
      this.loading$.next(loading);
    } else {
      setTimeout(() => {
        this.loading$.next(loading);
      }, 1000);
    }
  }

  allCategories(): Observable<ICategory[]> {
    return Observable.create(obs => {
      this.setLoading(true);
      let categories = this.localStorage.get("categories");
      if (categories) {
        this.setLoading(false);
        this.setCategories(categories);
        return obs.next(categories);
      }

      this.apiService.get("categories").subscribe(categories => {
        this.setLoading(false);
        this.localStorage.set("categories", categories);
        return obs.next(categories);
      });
    });
  }

  getServices(filter: Number = null) {
    this.setLoading(true);
    let querys = filter ? { category: filter } : null;
    this.apiService.get("services", querys).subscribe(services => {
      this.setServices(services);
      this.setLoading(false);
    });
  }

  setService(form:IService):Observable<IService> {
    return Observable.create(obs => {
      this.setLoading(true);
      this.apiService.post("services",form).subscribe(service => {
        this.setLoading(false);
        return obs.next(service);
      })
    })
  }
}
