import config from '../config';
import Circle from './Circle';

export default class Visualization {
  constructor(cb) {
    const _this = this;
    this.svg = this.createViz();
    this.objects = [];
    this.svg.on('mousedown', function () {
      const mouseCoordinates = d3.mouse(this);
      _this.addCircle(mouseCoordinates);
    });

    // Add random data
    this.addRandom();
    this.addRandom();
    this.addRandom();

    // Callback onLoaded
    cb();
  }

  addRandom() {
    this.addCircle([Math.random() * 300, Math.random() * 300]);
  }

  addCircle(mouseCoordinates) {
    this.objects.push(new Circle(this.svg, mouseCoordinates, config.defaultRadius * Math.random()));
  }

  createViz() {
    return d3.select('body')
      .append('svg')
      .attr('width', window.innerWidth)
      .attr('height', window.innerHeight);
  }
}
