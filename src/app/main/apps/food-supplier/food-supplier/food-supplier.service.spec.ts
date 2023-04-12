import { TestBed } from '@angular/core/testing';

import { FoodSupplierService } from './food-supplier.service';

describe('FoodSupplierService', () => {
  let service: FoodSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
