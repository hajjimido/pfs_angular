import { TestBed } from '@angular/core/testing';

import { Service.AdminService } from './service.admin.service';

describe('Service.AdminService', () => {
  let service: Service.AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service.AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
