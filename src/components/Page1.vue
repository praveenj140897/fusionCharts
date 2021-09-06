<template>
    <div>
        <router-link to='/page2'>Page 2</router-link>
        <fusioncharts :type="type" :width="width" :height="height" :dataFormat="dataFormat" :dataSource="dataSource"></fusioncharts>
    </div>
</template>

<script>
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import myDataSource from '../MyDataSource'

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

export default {
    name: 'Page1',
    data(){
        return {
            type: 'pie2d',
            width: '500',
            height: '300',
            dataSource: myDataSource,
            dataFormat: 'json'
        }
    }
}
</script>
