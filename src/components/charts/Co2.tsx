import Chart from "../Chart"
export default function Co2() {
    return (
    <div className="flex flex-col items-center">
        
        <div className="flex justify-center">
            <Chart type="co2" />
    
        </div>
        <div className="w-[90vw] p-5 pt-20 lg:p-20">

            <p>
                For thousands of years, the natural concentration of CO2 in earth
                atmosphere was around 280 ppm. 
                From the beginning of the industrial revolution,
                human activities like the burning of fossil fuels,
                deforestation, and livestock have increased this amount 
                by more than 30%.
            </p>
            <br />
            <p>
                For more information about prehistoric CO2 concentration, 
                current and future consequences please visit: 
                <span> </span>  
                <a href="https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide">
                    Climate Change: Atmospheric Carbon Dioxide 
                </a>
                <span> and </span>
                <a href="https://climate.nasa.gov/climate_resources/24/graphic-the-relentless-rise-of-carbon-dioxide/">
                    The relentless rise of carbon dioxide.
                </a>  
            </p>
       </div>
    </div>
      )
}
