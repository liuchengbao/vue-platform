<template>
  <div>
    <Title title="订单" />
    <div class="content_detail">
      <Table width="100%" border :columns="order" :data="orderData" />
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="orderData.length" :current="1" :page-size="4" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../../components/Title'
import {Table, Page} from 'iview'

export default {
  name: 'Order',
  components: {
    Title,
    Table,
    Page
  },
  data () {
    return {
      order: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ])
          }
        }
      ],
      orderData: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.orderData[index].name}<br>Age：${this.orderData[index].age}<br>Address：${this.orderData[index].address}`
      })
    },
    remove (index) {
      this.orderData.splice(index, 1)
    },
    changePage () {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      // this.orderData = this.data
    }
  }
}
</script>

<style scoped>
  .content_detail {
    padding: 25px;
  }
</style>
