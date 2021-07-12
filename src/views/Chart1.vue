<template>
  <div>
    <div id="chart">
        <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
      return {

          series: [33],
          chartOptions: {
            chart: {
              height: 350,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '70%',
                },
              },
            },
            fill: {
               colors: ['#000099' ]
            },
            labels: [''],
          },
      }
    },
};



</script>



<style>

</style>