import Chart from "../Chart"
export default function Temperature() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
          <Chart type="temperature" />
      </div>
      <div className="w-[90vw] p-5 pt-20 lg:p-20">
        <p>
            The current global warming rate is not natural. 
            From 1880 to 1981 was (0.07°C / 0.13°F) per decade.
            Since 1981 this rate has increased to (0.18°C / 0.32°F)
            Climate Change: Global Temperature.
        </p>
        <br />
        <p>
            The total average global temperature rise since the industrial 
            revolution is around (1.0 °C / 1.8 °F). Earth northern hemisphere 
            is warming faster. The arctic has warmed between (2 °C / 3.6 °F) 
            and (4 °C / 7.2 °F).
            Earth temperature and the proportion of gases such as Co2, methane,
            and nitrous oxide in the atmosphere is strictly correlated
        </p>
      </div>
    </div>
  )
}
