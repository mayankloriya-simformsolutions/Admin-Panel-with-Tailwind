// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon")

//theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
};

//Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("hidden");
        return;
    }
    sunIcon.classList.add("hidden");
};

//Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}

//call theme switch on clicking button
sunIcon.addEventListener("click", () => {
    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();
});

// invoke theme check on initial load
themeCheck();

function dropdownFunction(element) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    let list = element.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
    list.classList.add("target");
    for (i = 0; i < dropdowns.length; i++) {
        if (!dropdowns[i].classList.contains("target")) {
            dropdowns[i].classList.add("hidden");
        }
    }
    list.classList.toggle("hidden");
}
// Tab component
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      
      tabTogglers[i].parentElement.classList.remove("border-b-2", "border-blue-600", "-mb-px", "bg-white");  tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
      
    }
    e.target.parentElement.classList.add("border-b-2", "border-blue-600", "-mb-px", "bg-white");
  });
});

// menu dropdown
window.Components = {
    customSelect(options) {
      return {
        init() {
          this.$refs.listbox.focus()
          this.optionCount = this.$refs.listbox.children.length
          this.$watch('selected', value => {
            if (!this.open) return
  
            if (this.selected === null) {
              this.activeDescendant = ''
              return
            }
  
            this.activeDescendant = this.$refs.listbox.children[this.selected - 1].id
          })
        },
        activeDescendant: null,
        optionCount: null,
        open: false,
        selected: null,
        value: 1,
        choose(option) {
          this.value = option
          this.open = false
        },
        onButtonClick() {
          if (this.open) return
          this.selected = this.value
          this.open = true
          this.$nextTick(() => {
            this.$refs.listbox.focus()
            this.$refs.listbox.children[this.selected - 1].scrollIntoView({ block: 'nearest' })
          })
        },
        onOptionSelect() {
          if (this.selected !== null) {
            this.value = this.selected
          }
          this.open = false
          this.$refs.button.focus()
        },
        onEscape() {
          this.open = false
          this.$refs.button.focus()
        },
        onArrowUp() {
          this.selected = this.selected - 1 < 1 ? this.optionCount : this.selected - 1
          this.$refs.listbox.children[this.selected - 1].scrollIntoView({ block: 'nearest' })
        },
        onArrowDown() {
          this.selected = this.selected + 1 > this.optionCount ? 1 : this.selected + 1
          this.$refs.listbox.children[this.selected - 1].scrollIntoView({ block: 'nearest' })
        },
        ...options,
      }
    },
  }

//charts
  const chartOptions = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    tooltips: {
        enabled: false,
    },
    elements: {
        point: {
            radius: 0
        },
    },
    scales: {
        xAxes: [{
            gridLines: false,
            scaleLabel: false,
            ticks: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: false,
            scaleLabel: false,
            ticks: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 10
            }
        }]
    }
};
//
var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [1, 2, 1, 3, 5, 4, 7],
        datasets: [
            {
                backgroundColor: "rgba(101, 116, 205, 0.1)",
                borderColor: "rgba(101, 116, 205, 0.8)",
                borderWidth: 2,
                data: [1, 2, 1, 3, 5, 4, 7],
            },
        ],
    },
    options: chartOptions
});
//
var ctx = document.getElementById('chart2').getContext('2d');
var chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [2, 3, 2, 9, 7, 7, 4],
        datasets: [
            {
                backgroundColor: "rgba(246, 109, 155, 0.1)",
                borderColor: "rgba(246, 109, 155, 0.8)",
                borderWidth: 2,
                data: [2, 3, 2, 9, 7, 7, 4],
            },
        ],
    },
    options: chartOptions
});
//
var ctx = document.getElementById('chart3').getContext('2d');
var chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [2, 5, 1, 3, 2, 6, 7],
        datasets: [
            {
                backgroundColor: "rgba(246, 153, 63, 0.1)",
                borderColor: "rgba(246, 153, 63, 0.8)",
                borderWidth: 2,
                data: [2, 5, 1, 3, 2, 6, 7],
            },
        ],
    },
    options: chartOptions
});


function app() {
  return {
    chartData: [112, 10, 225, 134, 101, 80, 50, 100, 200],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    tooltipContent: '',
    tooltipOpen: false,
    tooltipX: 0,
    tooltipY: 0,
    showTooltip(e) {
      console.log(e);
      this.tooltipContent = e.target.textContent
      this.tooltipX = e.target.offsetLeft - e.target.clientWidth;
      this.tooltipY = e.target.clientHeight + e.target.clientWidth;
    },
    hideTooltip(e) {
      this.tooltipContent = '';
      this.tooltipOpen = false;
      this.tooltipX = 0;
      this.tooltipY = 0;
    }
  }
}

Number.prototype.m_formatter = function() {
  return this > 999999 ? (this / 1000000).toFixed(1) + 'M' : this
};
let stockTicker = function(){
  return {
      stockFullName: 'SW Limited.',
      stockShortName: 'ASX:SFW',
      price: {
          current: 2.320,
          open: 2.230,
          low: 2.215,
          high: 2.325,
          cap: 93765011,
          ratio: 20.10,
          dividend: 1.67
      },
      chartData: {
          labels: ['10:00','','','','12:00','','','','2:00','','','','4:00'],
          data: [2.23,2.215,2.22,2.25,2.245,2.27,2.28,2.29,2.3,2.29,2.325,2.325,2.32],
      },
      renderChart: function(){
          let c = false;

          Chart.helpers.each(Chart.instances, function(instance) {
              if (instance.chart.canvas.id == 'chart') {
                  c = instance;
              }
          });

          if(c) {
              c.destroy();
          }

          let ctx = document.getElementById('chart').getContext('2d');

          let chart = new Chart(ctx, {
              type: "line",
              data: {
                  labels: this.chartData.labels,
                  datasets: [
                      {
                          label: '',
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          borderColor: "rgba(255, 255, 255, 1)",
                          pointBackgroundColor: "rgba(255, 255, 255, 1)",
                          data: this.chartData.data,
                      },
                  ],
              },
              layout: {
                  padding: {
                      right: 10
                  }
              },
              options: {
                  legend: {
                      display: false,
                  },
                  scales: {
                      yAxes: [{
                          ticks: {
                              fontColor: "rgba(255, 255, 255, 1)",
                          },
                          gridLines: {
                              display: false,
                          },
                      }],
                      xAxes: [{
                          ticks: {
                              fontColor: "rgba(255, 255, 255, 1)",
                          },
                          gridLines: {
                              color: "rgba(255, 255, 255, .2)",
                              borderDash: [5, 5],
                              zeroLineColor: "rgba(255, 255, 255, .2)",
                              zeroLineBorderDash: [5, 5]
                          },
                      }]
                  }
              }
          });
      }
  }
}
// Bar chart - echart
// Initialize the echarts instance based on the prepared dom
var myBarChart = echarts.init(document.getElementById('BarChart'));

// Specify the configuration items and data for the chart
var option = {
  title: {
    text: 'ECharts Getting Started Example'
  },
  tooltip: {},
  legend: {
    data: ['sales']
  },
  xAxis: {
    data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};

// Display the chart using the configuration items and data just specified.
myBarChart.setOption(option);
window.addEventListener('resize', myBarChart.resize);

// Line chart - echart
// Initialize the echarts instance based on the prepared dom
var domLine = document.getElementById('LineChart');
var myLineChart = echarts.init(domLine, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

if (option && typeof option === 'object') {
  myLineChart.setOption(option);
}

window.addEventListener('resize', myLineChart.resize);

// Doughnut chart - echart
// Initialize the echarts instance based on the prepared dom
var domDoughnut = document.getElementById('DoughnutChart');
var myDoughnutChart = echarts.init(domDoughnut, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

if (option && typeof option === 'object') {
  myDoughnutChart.setOption(option);
}

window.addEventListener('resize', myDoughnutChart.resize);

// Bar with Negativevalue Chart - echart
// Initialize the echarts instance based on the prepared dom
var domBarwithNegativeValue = document.getElementById('BarwithNegativeChart');
var myBarNegativeChart = echarts.init(domBarwithNegativeValue, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

const labelRight = {
  position: 'right'
};
option = {
  title: {
    text: 'Bar Chart with Negative Value'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: 80,
    bottom: 30
  },
  xAxis: {
    type: 'value',
    position: 'top',
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  yAxis: {
    type: 'category',
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: [
      'ten',
      'nine',
      'eight',
      'seven',
      'six',
      'five',
      'four',
      'three',
      'two',
      'one'
    ]
  },
  series: [
    {
      name: 'Cost',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        formatter: '{b}'
      },
      data: [
        { value: -0.07, label: labelRight },
        { value: -0.09, label: labelRight },
        0.2,
        0.44,
        { value: -0.23, label: labelRight },
        0.08,
        { value: -0.17, label: labelRight },
        0.47,
        { value: -0.36, label: labelRight },
        0.18
      ]
    }
  ]
};

if (option && typeof option === 'object') {
  myBarNegativeChart.setOption(option);
}

window.addEventListener('resize', myBarNegativeChart.resize);