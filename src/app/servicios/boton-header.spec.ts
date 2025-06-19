import { TestBed } from '@angular/core/testing';

import { BotonHeader } from './boton-header';

describe('BotonHeader', () => {
  let service: BotonHeader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotonHeader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
