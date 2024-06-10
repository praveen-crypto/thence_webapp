import { ReactElement, useState, useEffect } from "react";

//Components
import {  TextInput } from "@mantine/core";
import { useForm, isEmail } from "@mantine/form";
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom';


//Stylesheet
import classes from './register.module.scss';

//Icons
import { FaCircleExclamation } from "react-icons/fa6";
import { MdCheck } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import brand from '../../assets/brand.svg';



function Navbar({showCloseIcon}: {showCloseIcon: boolean}): ReactElement {

  return (
    <>
      <nav className='navbar h-[88px] flex justify-between pt-6' >
        <div className="brand block my-auto ms-10">
          <img src={brand} className='' alt="Brand" />
        </div>

        {
          showCloseIcon &&
          <div className="nav-items flex gap-4 ">
            <Button component="a" href='/' label={<RxCross1 />} variant="outline" variantType={''} className={` w-[64px] h-[64px] text-[28px] border-[#CACACA] rounded-full text-[#0C1319] hover:bg-transparent hover:text-[#0C1319] `} />
          </div>
        }
      </nav>
    </>
  )

}

function Success(): ReactElement {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className=" w-[750px] h-[80%] flex flex-col mx-auto pt-32 pb-0 justify-between">
      <div className='head text-center' >
        <span className=' flex bg-[#28B246] w-[50px] h-[50px] rounded-full mx-auto mb-9 '>
          <MdCheck className='size-14 text-[56px] text-white mx-auto my-auto p-[4px]' />
        </span>


        <span className='cursive text-[#2DA950] text-[36px] '>
          Success Submitted
        </span>

        <h3 className='manrope text-[#1C1C1C] text-[56px] font-semibold leading-tight mt-0'>
          Congratulations
        </h3>

        <p className="manrope text-[#727272] font-medium text-[27px] leading-9 mt-4">
          Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates
        </p>
      </div>

      <div className="manrope text-[20px] text-[#727272] text-center mt-8">
        Redirecting you to Homepage in <span className="text-[#1C1C1C] font-bold"> {countdown} Seconds </span>
      </div>
    </div>
  )
}

function Register(): ReactElement{
  
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '',},
    
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: isEmail('Enter a valid email address'),
    },
  });

  const customErrorMessage = (message: any) => (
    <div style={{ display: 'flex', alignSelf: 'center', color: 'red', paddingTop:'10px' }}>
      <FaCircleExclamation size={14} style={{ marginRight: '10px', marginTop: '1px' }} />
      <span className="font-medium">{message}</span>
    </div>
  );

  const validateField = (name: string) => {
    form.validateField(name).hasError;
    
    setIsFormValid(form.isValid());
    
    //console.log(isValid, "Form valid", form.isValid() );

  }

  return (
    <div className="container mx-auto h-[100vh] overflow-hidden" >
      <Navbar showCloseIcon={!isFormSubmitted} />

      {isFormSubmitted ?

        <Success />

        :
        
        <div className="mt-[6%] h-[80%]">
          <div className='head text-center' >
            <span className='cursive text-[#2DA950] text-[36px]'>
              Registration Form
            </span>

            <h3 className='manrope text-[#1C1C1C] text-[56px] font-semibold leading-tight'>
              Start your success<br />Journey here!
            </h3>
          </div>

          <form className="w-[30%] h-[70%] flex flex-col gap-5 mx-auto mt-14 " onSubmit={() => { setIsFormSubmitted(true) }}>
            <TextInput
              className=" focus:border-[#537FF1] focus:!bg-[#F5F8FF] placeholder:!text-[#827A7A]"
              classNames={{ input: classes.textInput, error: classes.error }}
              variant="filled"
              radius="xl"
              size="xl"
              placeholder="Enter your name"
              key={form.key('name')}
              {...form.getInputProps('name')}
              onBlur={() => { validateField('name') }}
              error={form.errors.name && customErrorMessage(form.errors.name)}
            />

            <TextInput
              className=" focus:border-[#537FF1] focus:!bg-[#F5F8FF]"
              classNames={{ input: classes.textInput, error: classes.error }}
              variant="filled"
              radius="xl"
              size="xl"

              placeholder="Enter your email"
              key={form.key('email')}
              {...form.getInputProps('email')}
              onBlur={() => { validateField('email') }}

              error={form.errors.email && customErrorMessage(form.errors.email)}
            />

            <Button type="submit" className={`manrope h-[65px] text-lg rounded-[107px] ${isFormValid ? '' : classes.disabledButton} `} label={'Submit'} mt="sm" variantType={"primary"} disabled={!isFormValid} />

          </form>
        </div>
      }


    </div>
  )
}

export default Register