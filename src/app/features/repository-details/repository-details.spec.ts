import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { RepositoryDetails } from './repository-details';

describe('RepositoryDetails', () => {

  let component: RepositoryDetails;
  let fixture: ComponentFixture<RepositoryDetails>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [RepositoryDetails],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'test'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture =
      TestBed.createComponent(
        RepositoryDetails
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component)
      .toBeTruthy();
  });

});