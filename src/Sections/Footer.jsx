import React from "react";
const Footer=()=>{
    return(
        <div style={{'borderLeft':'hidden', 'borderRight':'hidden', 'borderBottom':'hidden'}} className="footer-cont flex flex-col justify-center space-y-2 bg-[#0D1117] text-[#C8D0D9] border-2 border-[#5DBBF0] overflow-x-hidden">
            <div className="footer-boxes grid grid-cols-3 mb-[1rem] pt-[1rem] gap-[4rem] px-[1.5rem]">
                <div className="footer-card flex flex-col space-y-5">
                    <p><b>About us</b></p>
                    <div className="border-dashed border-t-2 border-[#C8D0D9] w-full about-box flex flex-col justify-center gap-2">
                        <p className="mt-3"> Sanganika - Computer Science Department Society</p>
                        <p>Deen Dayal Upadhyaya College</p>
                        <p>Dwarka Sector - 3, New Delhi 110078</p>
                    </div>
                </div>
                <div className="footer-card flex flex-col items-center space-y-5]">
                    <p className="self-center font-bold">Follow us at</p>
                    <div className="border-dashed border-t-2 border-[#C8D0D9] follow-box flex justify-center gap-[1rem] w-full mt-[1.4rem]">
                        <a target = '_blank' href = 'https://www.instagram.com/sanganika_dduc/'><img src={process.env.PUBLIC_URL+'/assets/svg/instagram.svg'} className=" mt-3" alt="not found"/></a>
                        <a target = '_blank' href = 'https://www.facebook.com/sanganika/'><img src={process.env.PUBLIC_URL+'/assets/svg/facebook.svg'} className="mt-3" alt="not found"/></a>
                        <a target = '_blank' href = 'https://www.linkedin.com/company/sangaika-dduc/'><img src={process.env.PUBLIC_URL+'/assets/svg/linkedin.svg'} className="mt-3" alt="not found"/></a>
                    </div>
                </div>
                <div className="footer-card flex flex-col space-y-5">
                    <p><b>Contact Us</b></p>
                    <div className="border-dashed border-t-2 border-[#C8D0D9] contact-box flex flex-col space-y-5 w-full">
                        <div className="contac-1 flex space-x-2 mt-4" >
                            <img src={process.env.PUBLIC_URL+'/assets/svg/gmail.svg'} alt="not found"/>
                            <a href = 'mailto:sanganika.ddu@gmail.com'>sanganika.ddu@gmail.com</a>
                        </div>
                        <div className="contac-2 flex space-x-4">
                            <img src={process.env.PUBLIC_URL+'/assets/svg/phone.svg'} alt="not found"/>
                            <a href = 'tel:+91 91825-08492'>+91 91825-08492</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-[#C8D0D9] footer-copy flex justify-center bg-[#0D1117] text-[#5DBBF0] py-[1rem]">
                <p>copyright &copy; sanganika, 2023, All Rights reserved</p>
            </div>

        </div>
    );
}
export default Footer;