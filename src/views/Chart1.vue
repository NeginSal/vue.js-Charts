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
                  size: '33%',
                }
              },
            },
            labels: ['Cricket'],
          },









      }
    },
};



</script>



<style>

</style>