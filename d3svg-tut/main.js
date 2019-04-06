const canvas = d3.select('.canvas');
const svg = canvas.append('svg')
    .attr('height', 600)
    .attr('width', 600);

svg.append('circle')
    .attr('r', 40)
    .attr('cx', 100)
    .attr('cy', 30)
    .attr('fill', 'pink');

    console.todo('HEY')

svg.append('rect')
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'blue')
    .attr('x', 20)
    .attr('y', 20);

svg.append('line')
    .attr('x1', 350)
    .attr('x2', 400)
    .attr('y1', 20)
    .attr('y2', 110)
    .attr('stroke', 'purple');

console.todo = function (msg) {
    console.log(‘ % c % s % s % s‘, ‘color: yellow; background - color: black; ’, ‘–‘, msg, ‘–‘);
}

