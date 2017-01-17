import { AppComponent } from '../app.component';
import { NotificationComponent } from '../notification/notification.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../notification/notification.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('AppComponent', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [ FormsModule ],
      declarations: [ AppComponent, NotificationComponent ],
      providers:    [ NotificationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should fetch the notifications from the notifications service when the compoment loads', () => {
    fixture.detectChanges();
    expect(comp.notifications.length).toEqual(0);
  });

  it('should push the notifications to the notifications service when user clicks on Notify', () => {
    fixture.detectChanges();
    comp.newTitle = 'New notification title';
    comp.newBody = 'New notification body';
    comp.newType = 1;
    comp.onNotify();
    expect(comp.notifications.length).toEqual(1);
  });
});
