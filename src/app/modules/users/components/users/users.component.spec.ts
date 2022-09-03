import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetaService, NibrasService } from 'src/app/services';
import { TitleBarComponent } from 'src/app/shared/components/title-bar/title-bar.component';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let nibras: NibrasService;
  let meta: MetaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent, TitleBarComponent ],
      providers: [NibrasService, MetaService],
      imports: [HttpClientTestingModule],

    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    nibras = TestBed.inject(NibrasService);
    meta = TestBed.inject(MetaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getUsers should have been called', () => {
    const spy = spyOn(component, 'getUsers').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('counter should be get updated', () => {
    let counteFunc = component.counter(2);
    expect(counteFunc).toEqual(Array(2));
  });

  it('should change the view', () => {
    component.selectedView = 'card';
    component.gridViewChange('list');
    expect(component.selectedView).toEqual('list');
  });
});
