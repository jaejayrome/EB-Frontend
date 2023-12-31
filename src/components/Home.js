import { Box } from "@chakra-ui/layout"
import NeuralNetworkLogo from "../images/front_page_logo.png";
import YoloV5Logo from "../images/yolov5.png";
import PytorchLogo from "../images/pytorch_logo.png"
import {FaAnglesRight} from "react-icons/fa6"
import { Link } from "react-scroll";


export default function Home() {

    return (
        <Box className="min-w-full bg-green-900 py-20 sm:py-40 overflow-x-hidden" id="Home"> 
            <div className="flex flex-col-reverse sm:flex-row justify-center space-between text-white font-roboto px-4 py-8"> 
                <section id = "left hand title"> 
                    <div className=" mt-5 sm:mt-0 flex flex-col space-y-4 text-center"> 
                        <div> 
                            <span className="text-5xl"> 
                                Waste Management 
                            </span> 
                            <span className="text-6xl block text-green-200"> 
                                Simplified.
                            </span>
                        </div>

                        <div className="text-2xl"> 
                            <span className="block"> 
                            Introducing 
                                <span className="inline-block font-code"> 
                                &nbsp;plastic_eliminator v1.0 
                                </span>
                            <span className="block"> 
                                An image classifier <span className="text-green-200">deep learning</span> model that aims to sort recyclable waste
                            </span>                         
                            </span>
                        </div>
                    </div>
                    
                </section>
                <section className="right hand showcase"> 
                <div className="flex justify-center items-center"> 
                    <img src = {NeuralNetworkLogo} alt = "" className="object-contain w-1/2 h-1/2"/>
                </div>
                    
                </section>
            </div>
            <section id = "tech-stack"> 
            
                <div className="flex flex-row justify-center items-center"> 
                <Link to="Demo" spy={true} smooth={true} duration={500} style={{cursor: "pointer"}}>
                    <div className="bg-green-200 mt-8 px-4 py-4 mx-auto flex flex-row items-center justify-center rounded-xl"> 
                        <div className="flex flex-row justify-center items-center space-x-2"> 
                            <span className="text-2xl font-roboto text-green-900"> 
                                Try It Out
                            </span>
                            <FaAnglesRight className="text-green-900 text-xl" />
                        </div>
                        
                    </div>
                </Link>
                </div>
            </section>
        </Box>
    )
}