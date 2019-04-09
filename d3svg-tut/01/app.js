let dataset = [];
for (let i = 0; i < 10; i++) {
    dataset.push(Math.floor(d3.randomUniform(1, 100)()));
}

// Create svg element
const chartWidth = 600;
const chartHeight = 200;
const barPadding = 1;

const svg = d3.select('#chart')
    .append('svg')
    .attr('width', chartWidth)
    .attr('height', chartHeight);

// Bind data and create bars
svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('x', (d, i) => i * (chartWidth / dataset.length))
    .attr('y', d => chartHeight - d)
    .attr('width', (chartWidth / dataset.length) - barPadding)
    .attr('height', d => d)
    .classed('cold', d=>d < 50)
    .classed('hot', d=>d > 50);

// Create labels
svg.selectAll( 'text')
.data( dataset )
.enter()
.append( 'text' )
.text( d => d )
.attr( 'x', (d,i) => i * (chartWidth/dataset.length) + ((chartWidth/dataset.length - barPadding)/2))
.attr( 'y', d => chartHeight - d + 15)
.attr( 'fill', '#fff')
.attr( 'text-anchor', 'middle');
