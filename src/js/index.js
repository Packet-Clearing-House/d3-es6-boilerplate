import config from './config';
import Circle from './components/Circle';

export default class Visualization {
  constructor() {
    const _this = this;

    this.svg = this.createCanvas();
    this.objects = [];
    this.svg
    .on('mousedown', function() {
      const mouseCoordinates = d3.mouse(this);
      _this.objects.push(new Circle(_this.svg, mouseCoordinates, config.defaultRadius * Math.random()));
    });
  }

  createCanvas() {
    return d3.select('#viz')
      .append('svg')
      .attr('width', window.innerWidth)
      .attr('height', window.innerHeight);
  }
}
