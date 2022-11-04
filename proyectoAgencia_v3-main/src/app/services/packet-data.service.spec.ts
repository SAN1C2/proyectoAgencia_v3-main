import { TestBed } from '@angular/core/testing';

import { PacketDataService } from './packet-data.service';

describe('PacketDataService', () => {
  let service: PacketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacketDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
