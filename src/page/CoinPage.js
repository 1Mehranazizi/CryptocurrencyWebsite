import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const id = useParams().id;

  const [newSeries, setNewSeries] = useState([]);
  const [data, setData] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
        id: "chart",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },

      title: {
        text: "CoinMarketcap Chart",
        align: "left",
      },
      subtitle: {
        text: `${id}/USD`,
        align: "left",
      },
      labels: [],
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  });

  //Time Convereter Function
  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  };

  useEffect(() => {
    const fetchCoinChart = async () => {
      const response = await axios.get(
        `https://min-api.cryptocompare.com/data/histoday?fsym=${id}&tsym=USD&limit=30`
      );
      const newData = response.data.Data.map((coin) => ({
        x: timeConverter(coin.time),
        y: [coin.open, coin.high, coin.low, coin.close],
      }));
      console.log(newData);
      setNewSeries([
        {
          name: "Price",
          data: newData,
        },
      ]);
    };
    fetchCoinChart();
  }, [id]);

  return (
    <div className="chart">
      <ReactApexChart
        options={data.options}
        series={newSeries}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default CoinPage;
