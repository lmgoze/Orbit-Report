import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrbitListComponent } from './orbit-list.component';
import { Satellite } from '../satellite';
import { AppComponent } from '../app.component';
import { By } from "@angular/platform-browser";

describe('OrbitListComponent', () => {
  let component: OrbitListComponent;
  let fixture: ComponentFixture<OrbitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('should render title in a h1 tag', () => {
	const fixture = TestBed.createComponent(OrbitListComponent);
	fixture.detectChanges();
	const compiled = fixture.debugElement.nativeElement;
	expect(compiled.querySelector('h1').textContent).toContain('Orbit Report');
 });

 it('should add a warning class to satellites with space debris type', () => {
	component.satellites = [new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true)];
	fixture.detectChanges();
	expect(element.query(By.css('.warning'))).toBeFalsy();

	component.satellites = [new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false)];
	fixture.detectChanges();
	expect(element.query(By.css('.warning'))).toBeTruthy();
 });
});
