<template>
  <div class="level">
    <div :id="id" style="width: 100%; height: 190px"></div>
  </div>
</template>

<script>
let myChart;
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          textStyle: {
            color: "white",
          },
        },
        grid: {
          y: 60,
          y2: 20,
        },
        xAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "white",
            },
          },
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: "white",
            },
          },
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        series: [
          {
            name: "Direct",
            type: "bar",
            stack: "total",
            barGap: "-100%",
            barCategoryGap: "20%",

            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "Mail Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Affiliate Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: "Search Engine",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
    };
  },
  mounted() {
    setTimeout(() => {
      myChart = this.$echarts.init(document.getElementById(this.id));
      myChart.setOption(this.option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 1);
  },
  // updated() {
  //   const option = {
  //     tooltip: {
  //       trigger: "axis",
  //       axisPointer: {
  //         type: "cross",
  //         crossStyle: {
  //           color: "#999",
  //         },
  //       },
  //     },
  //     // toolbox: {
  //     //   feature: {
  //     //     saveAsImage: { show: true, title: "Save" },
  //     //   },
  //     // },
  //     legend: {
  //       data: ["Min", "Max", "Avg"],
  //       textStyle: {
  //         fontSize: 12,
  //       },
  //     },
  //     xAxis: {
  //       name: this.xAxis,
  //       offset: 20,
  //       nameLocation: "center",
  //       nameTextStyle: {
  //         fontSize: 12,
  //       },
  //       axisLabel: {
  //         fontSize: 12,
  //         verticalAlign: "bottom",
  //       },
  //       type: "category",
  //       data: 10,
  //     },
  //     yAxis: {
  //       nameTextStyle: {
  //         fontSize: 12,
  //       },
  //       name: this.yAxis,
  //       type: "value",
  //       min: 0,
  //       max: this.max,
  //       axisLabel: {
  //         // formatter: "{value} cm",
  //         fontSize: 12,
  //       },
  //     },

  //     series: [
  //       {
  //         //min data set
  //         name: "Min",
  //         data: [10, 20, 30],
  //         type: "line",
  //         fontSize: 30,
  //         color: "#36c25b",
  //         areaStyle: { color: "rgba(135, 211, 124, 1)" },
  //         label: {
  //           color: "black",
  //           fontSize: 15,
  //           formatter: function (d) {
  //             return d.name + d.data;
  //           },
  //         },
  //       },
  //       {
  //         //max data set
  //         name: "Max",
  //         data: [20, 10, 30],
  //         type: "line",
  //         fontSize: 30,
  //         color: "#f52525",
  //         areaStyle: { color: "rgba(246, 36, 89, 0.2)" },
  //         label: {
  //           color: "black",
  //           fontSize: 15,
  //           formatter: function (d) {
  //             return d.name + d.data;
  //           },
  //         },
  //       },
  //       {
  //         //average data set
  //         name: "Avg",
  //         data: [40, 10, 20],
  //         type: "line",
  //         fontSize: 30,
  //         color: "#1930fc",
  //         areaStyle: { color: "rgba(137, 196, 244, 0.5)" },
  //         label: {
  //           color: "black",
  //           fontSize: 15,
  //           formatter: function (d) {
  //             return d.name + d.data;
  //           },
  //         },
  //       },
  //     ],
  //   };
  //   // var myChart = this.$echarts.init(document.getElementById(this.id));
  //   myChart.setOption(option, true);
  //   // console.log(this.data)
  // },
  props: ["id"],
  // props: ["data", "id", "title", "xAxis", "yAxis", "max"],
};
</script>

<style scoped>
.v-card__title {
  font-size: 1rem;
  padding: 8px 10px 8px 20px;
  color: aliceblue;
}

.level {
  /* background-color: white; */
}
</style>
