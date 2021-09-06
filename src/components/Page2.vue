<template>
    <div>
        <router-link to='/'>Page 1</router-link>
        <fusioncharts :type="type" :width="width" :height="height" :dataFormat="dataFormat" :dataSource="dataSource"></fusioncharts>
    </div>
</template>

<script>
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import DataSource from '../DataSource'

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

export default {
    name: 'Page2',
    data(){
        return {
            type: "column2d",
            renderAt: "chart-container",
            width: "550",
            height: "350",
            dataFormat: "json",
            dataSource: DataSource
        }
    }
}
</script>
