import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentConversationComponent } from './content-conversation.component';
import {NgForm} from '@angular/forms';

describe('ContentConversationComponent', () => {
  let component: ContentConversationComponent;
  let fixture: ComponentFixture<ContentConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
