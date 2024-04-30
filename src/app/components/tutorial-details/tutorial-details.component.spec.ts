import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDetailsComponent } from './tutorial-details.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AddTutorialComponent} from "../add-tutorial/add-tutorial.component";

describe('TutorialDetailsComponent', () => {
  let component: TutorialDetailsComponent;
  let fixture: ComponentFixture<TutorialDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TutorialDetailsComponent,AddTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
