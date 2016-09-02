/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';

describe('Service: TodoDateService', () => {
  beforeEach(() => {
    addProviders([TodoDataService]);
  });

  it('should ...',
    inject([TodoDataService],
      (service: TodoDataService) => {
        expect(service).toBeTruthy();
      }));
});
