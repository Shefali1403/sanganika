import React from "react";
const Footer=()=>{
    // insta function will take the user to the instagram link provided when the button is clicked 
    const insta=()=>{
        const url='https://www.instagram.com/sanganika_dduc/';
        window.open(url, '_blank');

    }
    const facebook=()=>{

    }
    // linkdin function will take the user to the linkdin url provided when the button is clicked 
    const linkdin=()=>{
        const url='https://www.linkedin.com/company/sangaika-dduc/mycompany/';
        window.open(url, '_blank');

    }
    // email function will take the user to the email box to write the mail to the provided mail id when the button is clicked
    const email=()=>{
        const emailid='sanganika.ddu@gmail.com';
        const emailUrl=`mailto:${emailid}`;
        window.location.href=emailUrl;
    }
    // phone function will take the user to call log to call to the provided number when the button is clicked 
    const phone=()=>{
        const phn='+91 91825-08492';
        const phnurl=`tel:${phn}`;
        window.location.href=phnurl;
    }
    return(
        <>
        {/* footer-cont contains two div footer-boxes and footer-copy  */}
        <div style={{'borderLeft':'hidden', 'borderRight':'hidden', 'borderBottom':'hidden'}} className="footer-cont flex flex-col justify-center space-y-2 bg-[#0D1117] text-white border-2 border-[#5DBBF0] overflow-x-hidden">
            <div className="footer-boxes grid grid-cols-3">
                {/* footer-boxes contain three footer-card about us, follow us, contact us  */}
                <div className="footer-card flex flex-col space-y-5 mt-[1rem] ml-3">
                    <p><b>About us</b></p>
                    <div style={{'border':"2px dashed white", 'borderLeft':'hidden', 'borderRight':'hidden', 'borderBottom':'hidden'}} className="about-box flex flex-col justify-center space-y-5 w-[29vw] mb-[1rem]">
                        <p className="mt-3"> Sanganika - Computer Science Department Society</p>
                        <p>Deen Dayal Upadhyaya College</p>
                        <p>Dwarka Sector - 3, New Delhi 110078</p>
                    </div>
                </div>
                <div className="footer-card flex flex-col space-y-5 mt-[1rem]">
                    <p style={{'textAlign':'center'}}><b>Follow us at</b></p>
                    <div style={{'border':'2px dashed white','borderLeft':'hidden', 'borderRight':'hidden', 'borderBottom':'hidden' }}className="follow-box flex justify-center space-x-3 w-[29vw] mt-[1.4rem] ml-3">
                        <img src={process.env.PUBLIC_URL+'/images/social1.png'} className=" mt-3" alt="not found" onClick={insta} />
                        <img src={process.env.PUBLIC_URL+'/images/social2.png'} className="mt-3" alt="not found" onClick={facebook}  />
                        <img src={process.env.PUBLIC_URL+'/images/social3.png'} className="mt-3" alt="not found" onClick={linkdin} />
                    </div>
                </div>
                <div className="footer-card flex flex-col space-y-5 mt-[1rem] ml-2 ">
                    <p><b>Contact Us</b></p>
                    <div style={{'border':'2px dashed white','borderLeft':'hidden', 'borderRight':'hidden', 'borderBottom':'hidden' }} className="contact-box flex flex-col space-y-5 w-[29vw]">
                        <div className="contac-1 flex space-x-4 mt-4" >
                            <img src={process.env.PUBLIC_URL+'/images/contact2.png'} alt="not found" onClick={email} />
                            <p>sanganika.ddu@gmail.com</p>
                        </div>
                        <div className="contac-2 flex space-x-4">
                            <img src={process.env.PUBLIC_URL+'/images/contact1.png'} alt="not found" onClick={phone} />
                            <p>+91 91825-08492</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer-copy  */}
            <div style={{'border': '1px solid white', 'borderLeft':'hidden','borderRight':'hidden', 'borderBottom':'hidden'}} className="footer-copy flex justify-center bg-[#0D1117] text-[#5DBBF0] py-[1rem]">
                <p>copyright &copy; sanganika, 2023, All Rights reserved</p>
            </div>

        </div>
        </>
    );
}
export default Footer;