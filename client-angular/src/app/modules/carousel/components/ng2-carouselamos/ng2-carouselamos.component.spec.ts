import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { CarouselModule } from '../../';
import { Ng2Carouselamos } from './ng2-carouselamos.component';

describe('Ng2Carouselamos', () => {
  const timeStringFormat = /[0-9]{2}:[0-9]{2}:[0-9]{2}/i;
  let componentFixture: ComponentFixture<Ng2Carouselamos>;
  let componentInstance: Ng2Carouselamos;

  // Asynchronous beforeEach.
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CarouselModule],
      }).compileComponents().then(() => { /* Don't do anything */ });
    }),
  );

  // Synchronous BeforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(Ng2Carouselamos);
    componentInstance = componentFixture.componentInstance;
  });

  it('should display time string', (done) => {
    componentFixture.detectChanges();

    setInterval(() => {
      componentFixture.detectChanges();

      const tickTockPageElement = componentFixture.debugElement.queryAll(By.css('.tick-tock-time'));
      const displayedTimeText = tickTockPageElement[0].nativeElement.innerText;

      expect(tickTockPageElement).toBeDefined();
      expect(tickTockPageElement.length).toEqual(1);
      expect(displayedTimeText.length).toEqual(8);
      expect(timeStringFormat.test(displayedTimeText)).toBeTruthy();

      done();
    },          1000);
  });
});
