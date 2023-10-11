import Chart from "../Chart"
export default function Arctic() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center">
                <Chart type="arctic" />
            </div>
                <div className="w-[90vw] p-20">
                <p>
                    The arctic is warming around twice as fast as global average. 
                    Some of the reasons for this are: The arctic amplification, 
                    the albedo effect, and black carbon. From 1979 to 1996, we lost 2.2 – 3% 
                    of the arctic ice cover. From 2010 to present we are losing 12.85% per decade!
                </p>
                <br />
                <p>
                    Another consequence is permafrost thawing. 
                    This is a process in which large amounts of methane is released to the 
                    atmosphere, fueling more the process of global warming.
                </p>
                <br />
                <p>
                    For more details please visit:
                    <span> </span>  
                    <a href="https://www.npolar.no/en/themes/climate-change-in-the-arctic/#toggle-id-8">
                        Climate change in the Arctic
                    </a>
                    <span> and </span>
                    <a href="https://www.igsoc.org/annals/46/a46a005.pdf">
                        Recent air-temperature changes in the Arctic.
                    </a>  
                </p>
            </div>
        </div>
    )
}
