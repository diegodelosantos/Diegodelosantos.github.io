import {Component} from '@angular/core';


@Component({
  selector: 'app-slider-configurable-example',
  templateUrl: './slider-configurable-example.component.html',
  styleUrls: ['./slider-configurable-example.component.scss'],
  
})
export class SliderConfigurableExampleComponent {
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
}
