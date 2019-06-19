import { TestBed } from '@angular/core/testing';

import { BarbeariaService } from './barbearia.service';

describe('BarbeariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarbeariaService = TestBed.get(BarbeariaService);
    expect(service).toBeTruthy();
  });
});
