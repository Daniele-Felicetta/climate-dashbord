import Chart from "../Chart"
export default function Methane() {
    return (
    <div className="flex flex-col items-center">

        <div className="flex justify-center">
            <Chart type="methane" />
        </div>
        <div className="w-[90vw] p-5 pt-10 lg:p-20 lg:pt-10">


            <p>
                Methane is a flammable gas formed by geological and biological 
                processes. Some of the natural ones are leaks from natural gas 
                systems and wetlands.
                50-65% of total global methane emissions come from human 
                activities. These include livestock, agriculture, oil and 
                gas systems, waste from homes and businesses, landfills, 
                and so on.
            </p>
            <br />
            <p>
                Methane is a gas with a global warming potential several 
                times stronger than of CO2. For more than 650,000 years,
                methane concentration in the atmosphere was between 350 
                – 800 ppb. From the beginning of the industrial revolution, 
                human activities have increased this amount by around 150%.
            </p>
            <p>
                <span>For more information about the methane situation please visit: </span>  
                <a href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#methane" target="_blank" rel="noopener noreferrer">
                EPA: Methane Emissions
                </a>
                <span> and </span>
                <a href="https://earthobservatory.nasa.gov/images/146978/methane-emissions-continue-to-rise" target="_blank" rel="noopener noreferrer">
                NASA: Methane Emissions Continue to Rise.
                </a>  
            </p>
            <p>
            For more information about the prehistoric methane concentration, please visit:
            <span> </span>  
            <a href="https://www.nature.com/articles/nature06950" target="_blank" rel="noopener noreferrer">
            Orbital and millennial-scale features of atmospheric CH4 over the past 800,000 years.
            </a>  
            </p>
        </div>
        </div>
      )
}
