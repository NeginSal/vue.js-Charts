<template>
  <div id="chart2">
     <div id="chart">
       <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
     </div>
  </div>
</template>

<script>
export default {
  data: function() {
      return {
          series: [{
            data: [{
                x: 'Last Year',
                y: 400,
              },
              {
                x: 'Next Year',
                y: 700
              },

              {
                x: 'Year 2',
                y: 500
              },
              {
                x: 'Year 3',
                y: 3300
              },
              {
                x: 'Year 4',
                y: 3800
              },
              {
                x: 'Year 5',
                y: 2700
              },

            ],
          }],
          chartOptions: {
            chart: {
              type: 'area',
              height: 350,
              animations: {
                enabled: false
              },
              zoom: {
                enabled: false
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight',
            },
            fill: {
               type: 'gradient',
               gradient: {
                  shade: 'dark',
                  gradientToColors: [ '0, 0, 0, 153'],
                  shadeIntensity: 1,
                  type: 'horizontal',
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: []
                },
            },
            markers: {
              size: 6,
              hover: {
                size: 12,
              }
            },
            tooltip: {
              intersect: true,
              shared: false
            },

            annotations: {
               xaxis: [
                {
                  x:'Last Year',
                  borderColor: '#fff',
                  strokeDashArray: 0,

                },
                {
                    x:'Next Year',
                    borderColor: '#fff',
                    strokeDashArray: 0,

                },
                {
                    x:'Year 2',
                    borderColor: '#fff',
                    strokeDashArray: 0,
                },
                {
                    x:'Year 3',
                    borderColor: '#fff',
                    strokeDashArray: 0,

                },
                {
                  x:'Year 4',
                  borderColor: '#fff',
                  strokeDashArray: 0,
                },
                {
                  x:'Year 5',
                  borderColor: '#fff',
                  strokeDashArray: 0,
                },
              ],

            }
        },

    }
},
};



</script>

<style scoped>
#chart{
    margin: 5% auto;
    width: 600px;
}

</style>