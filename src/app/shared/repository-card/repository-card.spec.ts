import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryCard } from './repository-card';

describe('RepositoryCard', () => {
  let component: RepositoryCard;
  let fixture: ComponentFixture<RepositoryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoryCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoryCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
