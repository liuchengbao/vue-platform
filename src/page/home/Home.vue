<template>
  <div class="home">
    <Row>
      <Col span="6" class="chart-box-left">
        <div class="statistical-box statistical-box1">
          <div class="statistical-head">
            <span class="statistical-name">代理点</span>
            <Icon type="md-settings" size="16" class="whiteColor" />
          </div>
          <div class="statistical-content">
            <Icon type="ios-add-circle-outline" size="26" class="whiteColor fontBold" />
            <div>
              <Icon type="ios-flame" size="14" class="whiteColor"/>
              <span class="statistical-total whiteColor">1</span>
            </div>
          </div>
        </div>
      </Col>
      <Col span="6" class="chart-box-right chart-box-left">
        <div class="statistical-box statistical-box2">
          <div class="statistical-head">
            <span class="statistical-name">订单</span>
          </div>
          <div class="statistical-content">
            <Icon type="ios-reorder" size="26" class="whiteColor fontBold" />
            <div>
              <Icon type="md-reorder" size="14" class="whiteColor"/>
              <span class="statistical-total whiteColor">1</span>
            </div>
          </div>
        </div>
      </Col>
      <Col span="6" class="chart-box-right chart-box-left">
        <div class="statistical-box statistical-box3">
          <div class="statistical-head">
            <span class="statistical-name">结算/支付</span>
          </div>
          <div class="statistical-content">
            <Icon type="md-card" size="26" class="whiteColor fontBold" />
            <div>
              <Icon type="ios-card-outline" size="14" class="whiteColor"/>
              <span class="statistical-total whiteColor">1</span>
            </div>
          </div>
        </div>
      </Col>
      <Col span="6" class="chart-box-right">
        <div class="statistical-box statistical-box4">
          <div class="statistical-head">
            <span class="statistical-name">用户</span>
          </div>
          <div class="statistical-content">
            <Icon type="ios-people" size="26" class="whiteColor fontBold" />
            <div>
              <Icon type="ios-contact" size="14" class="whiteColor"/>
              <span class="statistical-total whiteColor">1</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="12" class="chart-box-left">
        <div class="chart-box ">
          <ve-line :data="lineChartData" :settings="lineChartSettings" />
        </div>
      </Col>
      <Col span="12" class="chart-box-right">
        <div class="chart-box">
          <ve-map :data="mapChartData" />
        </div>
      </Col>

      <Col span="12" class="chart-box-left">
        <div class="chart-box ">
          <VePie :data="pieChartData" />
        </div>
      </Col>
      <Col span="12" class="chart-box-right">
        <div class="chart-box">
          <ve-bar :data="barChartData" />
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import {Row, Col, Icon} from 'iview'
import VeLine from 'v-charts/lib/line.common'
import VeMap from 'v-charts/lib/map.common'
import VePie from 'v-charts/lib/pie.common'
import VeBar from 'v-charts/lib/bar.common'

export default {
  name: 'Home',
  components: {
    Row,
    Col,
    VeLine,
    VeMap,
    VePie,
    VeBar,
    Icon
  },
  data () {
    this.lineChartSettings = {
      axisSite: { right: ['下单率'] },
      yAxisType: ['KMB', 'percent'],
      yAxisName: ['数值', '比率']
    }
    return {
      lineChartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {'日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32},
          {'日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26},
          {'日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76},
          {'日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49},
          {'日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323},
          {'日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78}
        ]
      },
      mapChartData: {
        columns: ['位置', '访问人数', '购买人数', '购买数量'],
        rows: [
          { '位置': '吉林', '访问人数': 123, '购买人数': 123, '购买数量': 92134 },
          { '位置': '北京', '访问人数': 1223, '购买人数': 2123, '购买数量': 29234 },
          { '位置': '上海', '访问人数': 2123, '购买人数': 1243, '购买数量': 94234 },
          { '位置': '浙江', '访问人数': 4123, '购买人数': 5123, '购买数量': 29234 }
        ]
      },
      pieChartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      barChartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 100%;
}
.statistical-box {
  padding: 20px;
  background: #FFF;
  border-radius: 4px;
  height: 100%;
}
.statistical-box1 {
  background: #46be8a;
}
.statistical-box2 {
  background: #827ca1;
}
.statistical-box3 {
  background: #0085ff;
}
.statistical-box4 {
  background: rgba(50, 50, 50, 0.7);
}
.chart-box {
  background: #FFF;
  border-radius: 8px;
  padding-top: 20px;
  margin-top: 20px;
}
.chart-box-left {
  padding-right: 10px;
}
.chart-box-right {
  padding-left: 10px;
}
.statistical-head, .statistical-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.statistical-head {
  margin-bottom: 36px;
}
.statistical-name {
  font-size: 16px;
  color: #FFF;
}
.whiteColor {
  color: #FFF;
}
.fontBold {
  font-weight: bold;
}
.statistical-total {
  font-size: 16px;
  display: inline-block;
  margin-left: 12px;
}
</style>
