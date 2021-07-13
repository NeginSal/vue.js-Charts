<template>
  <div id="chartdiv"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldHigh"

export default {
  mounted() {
    // Create map instance
    let map = am4core.create("chartdiv", am4maps.MapChart)
    // Set map definition
    map.geodata = am4geodata_worldLow
    // Set projection
    map.projection = new am4maps.projections.Mercator()
    // Create map polygon series
    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries())
    //Make map load polygon
    polygonSeries.useGeodata = true
    polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
      map.zoomToMapObject(ev.target)
    })


    let imageSeries = map.series.push(new am4maps.MapImageSeries())
    imageSeries.sequencedInterpolation = true

    let imageSeriesTemplate = imageSeries.mapImages.template

    let circle = imageSeriesTemplate.createChild(am4core.Circle)
    circle.fill = am4core.color("#b3d9ff")
    circle.radius =5
    circle.stroke = am4core.color("#000066")
    circle.strokeWidth = 0.5
    circle.tooltipText = "{title}"

    imageSeriesTemplate.propertyFields.latitude = "latitude"
    imageSeriesTemplate.propertyFields.longitude = "longitude"
    imageSeriesTemplate.fill=am4core.color("#b3d9ff")


    imageSeries.data = [{
      "title": "England",
      "latitude": 51.509865,
      "longitude": -0.118092
    },
    {
      "title": "Iran",
      "latitude": 35.715298,
      "longitude": 51.404343
    },
    {
      "title": "Texas",
      "latitude": 31.000000,
      "longitude": -100.000000
    },
  ]
  },
  beforeDestroy() {
    if (this.map) {
      this.map.dispose()
    }
  }
}
</script>
<style scoped>
#chartdiv {
   margin: 2% auto;
   width: 100%;
   height: 600px;
}
</style>