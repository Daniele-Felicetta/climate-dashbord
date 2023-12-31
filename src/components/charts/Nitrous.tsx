import Chart from "../Chart"
export default function Nitrous() {
    return (
    <div className="flex flex-col items-center">
        <div className="flex justify-center">
            <Chart type="nitrous-oxide" />
        </div>
        <div className="w-[90vw] p-5 pt-10 lg:p-20 lg:pt-10">


            <p>
                Nitrous oxide is a gas that is produced by the combustion
                of fossil fuel and solid waste, nitrogen-base fertilizers,
                sewage treatment plants, natural processes, and other 
                agricultural and industrial activities.
            </p>
            <br />
            <p>
                It is the third largest heat-trapping gas in the atmosphere and the biggest ozone-destroying compound emitted by human activities. 
            </p>
            <p>
                <span>For more detailed information please visit: </span>  
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3306630/" target="_blank" rel="noopener noreferrer">
                    Stratospheric ozone depletion due to nitrous oxide: influences of other gases 
                </a>
                <span> and </span>
                <a href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#nitrous-oxide" target="_blank" rel="noopener noreferrer">
                    EPA: Nitrous Oxide Emissions.
                </a>  
                </p>
            </div>
        
    </div>
    )
}
