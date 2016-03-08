import config from '../config';
export default class Circle {
  constructor(parentSvg, coordinates = [0, 0], radius = 10) {
    this.element = parentSvg.append('circle')
        .style('stroke', 'gray')
        .style('fill', config.mainColor)
        .attr('r', radius)
        .attr('cx', coordinates[0])
        .attr('cy', coordinates[1]);

    this.addHover();
  }

  addHover() {
    this.element.on('mouseover', function () {
      d3.select(this).style('fill', config.hoverColor);
    })
    .on('mouseout', function () {
      d3.select(this).style('fill', config.mainColor);
    });
  }
}
