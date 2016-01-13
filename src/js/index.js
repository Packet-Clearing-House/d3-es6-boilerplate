import config from './config';
import Circle from './components/Circle';

export default class Visualization {
  constructor() {
    const _this = this;
    this.svg = this.createViz();
    this.objects = [];
    this.svg.on('mousedown', function() {
      const mouseCoordinates = d3.mouse(this);
      _this.addCircle(mouseCoordinates);
    });

    // Add random data
    this.addRandom();
    this.addRandom();
    this.addRandom();
  }

  addRandom() {
    this.addCircle([Math.random() * 300, Math.random() * 300]);
  }

  addCircle(mouseCoordinates) {
    this.objects.push(new Circle(this.svg, mouseCoordinates, config.defaultRadius * Math.random()));
  }

  createViz() {
    return d3.select('#viz')
      .append('svg')
      .attr('width', window.innerWidth)
      .attr('height', window.innerHeight);
  }
}
