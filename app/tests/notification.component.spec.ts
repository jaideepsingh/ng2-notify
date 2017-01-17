import { AppComponent } from '../app.component';
import { NotificationComponent } from '../notification/notification.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../notification/notification.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('NotificationComponent', function () {
  let comp: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let notificationService: NotificationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [ FormsModule ],
      declarations: [ AppComponent, NotificationComponent ],
      providers:    [ NotificationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    comp = fixture.componentInstance;
    notificationService = TestBed.get(NotificationService);
  });

  it('should clear the specific notification when close is clicked', () => {
    spyOn(notificationService, 'clearNotification');
    comp.clearNotification(0);
    expect(notificationService.clearNotification).toHaveBeenCalled();
  });
});
