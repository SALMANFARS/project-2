import React, { useState } from "react";
import { Card } from "./components/Card";
import "./App.css";

// import on from "./assets/on.gif";
// import off from "./assets/off.gif";
import logo from "./assets/logo.png";
import surprice from "./assets/surprice.png";
import img from './assets/img.jpg';
import photo1 from './assets/photo1.png';
import ok from './assets/ok.png';
import brouser from './assets/brouser.png';
import kargo from './assets/kargo.png';
import toOhir from './assets/toOhir.png';
import fon2 from './assets/fon2.png';
import ph1  from './assets/ph1.jpg';
import ph2  from './assets/ph2.jpg';
import fon3 from './assets/fon3.png';
import user from './assets/user.png';
import { Block2 } from "./components/Block2";
import imgComponent from './assets/imgComponent.jpg';
import imgVideo from './assets/imgVideo.jpg'
import GemaroyBlock  from "./components/GemaroyBlock";
import Block from "./components/Block";
import lastimg from "./assets/last-img.jpg";
import facebook from './assets/facebook.png';
import telegram from './assets/telegram.png';
import instagram from './assets/instagram.png';
import viber from './assets/viber.png';
import map from './assets/map.png';
import TemporaryDrawer from "./components/burger";



// import "./App.css";

function App() {
  //  const [cnt, setcnt]= useState(0)

  //  const [lamp, setlamp] = useState(false)

  // const [modal, setmodal] = useState(false)

  // const [todos, setTodos] = useState([
  //   {
  //     id:1,
  //     title:"Hello",
  //     complete:false
  //   },
  //   {
  //     id:2,
  //     title:"World",
  //     complete:false
  //   }
  // ])

  // const deleteUser = (id)=>{
  //  let arr = todos.filter((e)=>{
  //   return e.id!=id
  //  })

  //  settodos(arr)
  // }

  // const [text, setText] = useState("")

  // const addUser = ()=>{
  //   let obj = {
  //     id: new Data().getTime(),
  //     title: text,
  //     complete:false
  //   }

  //   let ar = [...todos, obj]

  //   setTodos(ar)
  // }

  //  const add=()=>{
  //   setcnt(cnt+1)
  //  }

  //  const minus =()=>{
  //   setcnt(cnt-1)
  //  }

  //  const reset =()=>{
  //   setcnt(0)
  //  }
  return (
    <div>
      <div className="section1">
        <div className="conteiner">
          <div className="block1 sm:flex sm:justify-between md:flex flex-wrap text-white md:justify-center gap-[50px]">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="items sm:hidden  md:flex md:flex-wrap md:gap-[25px] md:py-[35px] ">
              <p>
                <a href="">Главная</a>
              </p>
              <p>
                <a href="">Портфолио </a>
              </p>
              <p>
                <a href="">Каталог</a>
              </p>
              <p>
                <a href="">Блог </a>
              </p>
              <p>
                <a href="">Контакты</a>
              </p>
            </div>

            <div className="contact sm:hidden lg:flex lg:flex-wrap gap-[10px] py-[35px]">
              <p>+7 495 178 57 17 </p>
              <ul>
                <li>Обратный звонок</li>
              </ul>

            </div>
            <div className="burger sm:mt-[25px] sm:mr-[25px] md:hidden">
              <TemporaryDrawer/>
            </div>
          </div>
        </div>
        <div className="conteiner">
          <div className="block2">
            <h1 className="sm:hidden md:block md:text-center md:text-7xl text-white py-[50px]">
              Нанесение декоративных штукатурок премиум сегмента в современном
              стиле
            </h1>
            <div className="inf sm:flex sm:flex-wrap  sm:py-[15px] sm:px-[150px] sm:p-auto sm:my-[25px] sm:mr-[850px] sm:ml-[20px] sm:text-lg md:flex md:flex-wrap md::px-[25px]  bg-gray-100  rounded-md">
              <img src={surprice} alt="" />
              <p className="py-[10px] ml-[10px]">
                Наши клиенты получают скидку 10% на материалы
              </p>
            </div>
            <button className="sm:text-center sm:py-[15px] sm:px-[20px] sm:my-[50px]  md:py-[15px] md:px-[20px] md:my-[50px] text-white bg-gradient-to-r from-gray-700 to-blue-200 ml-[20px]">
              Заказать проект
            </button>
          </div>
        </div>
      </div>
      <div className="section2">
        <img src={img} alt="" />
        <div className="conteiner">
          <div className="block3">
            

          </div>
        </div>
      </div>

      <div className="section4">
        <div className="conteiner">
          <div className="block4 flex flex-wrap justify-center items-center py-[25px]">
          <div className="left text-xs">
              <h2 className="py-[25px]">О нас</h2>

              <p className="py-[25px]">Мы хотим что бы наши проекты соответствовали нашим 
                <br /> высоким требованиям и желаниям заказчика, 
                <br />были актуальными и уникальными.
             </p>

             <p className="py-[25px]">Décor color expert  - это команда профессионалов, которые <br />
              воплощают в реальность самые сложные пожелания заказчика.  <br /> 
             Мы не просто делаем штукатурные  <br />

              работы и предоставляем услуги по окрашиванию стен, <br />
              а создаем искусство, которое долгие годы будет <br />
               радовать Ваш глаз и сохранит первоклассное качество.</p>
            </div>
            <div className="right">
              <img src={photo1} alt="" className="w-[50%] m-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="conteiner">
          <div className="block5  py-[50px]">
            <p className="sm:text-center md:text-left md:py-[20px] md:ml-[100px] py-[25px] text-white">Почему мы?</p>
            <div className="component flex flex-wrap justify-center gap-[25px] ">
     <Card img={ok} text1="Первоклассное качество 
     Высокое качество исполнения реализованных проектов и благодарные отзывы счастливых клиентов
      позволяют утверждать что декорирование стен – наше призвание."/>
      <Card img={brouser} text1="Первоклассное качество 
     Высокое качество исполнения реализованных проектов и благодарные отзывы счастливых клиентов
      позволяют утверждать что декорирование стен – наше призвание."/>
      <Card img={kargo} text1="Первоклассное качество 
     Высокое качество исполнения реализованных проектов и благодарные отзывы счастливых клиентов
      позволяют утверждать что декорирование стен – наше призвание."/>
      <Card img={toOhir} text1="Первоклассное качество 
     Высокое качество исполнения реализованных проектов и благодарные отзывы счастливых клиентов
      позволяют утверждать что декорирование стен – наше призвание."/>
            </div>
          </div>
        </div>
      </div>

      <div className="section6">
      <img src={img} alt="" />
        <div className="conteiner">
          <div className="block6">

          </div>
        </div>
      </div>

      <div className="section7">
        <div className="conteiner">
          <div className="block6">
            <p className="sm:text-center md:text-left md:py-[20px] md:ml-[50px} mt-[50px]  text-xl ">Портфолио</p>
        <div className="component2 ">
       <div className="comp0 flex flex-wrap justify-center gap-[50px]">
       <Block img={ph1} text1="Travertino FEIDAL" text2="Матеріал дає можливість отримати ефект природного каменю травертину." />
        <Block img={ph2} text1="Innenlatex Seidenmatt FEIDAL" text2="Особливо стійка до миття та до дії миючих та дезінфікуючих засобів, має нейтральний запах."/>
       </div>
            <div className="btn text-center">
            <button className="  py-[15px] px-[20px] my-[50px] text-white bg-gradient-to-r from-gray-700 to-blue-200">Оставить заявку</button>
            </div>
        </div>
          </div>
        </div>
      </div>

      <div className="section8">
        <div className="conteiner">
          <div className="block8 text-center py-[50px]">
            <div className="txt py-[20px] px-[10px] bg-white my-[20px] mx-[80px] rounded-xl">
            <p className=" ">Рассчитайте ориентировочную стоимость выполнения Ваших работ ответив всего на 5 вопросов</p>
            </div>
            <div className="all  ">
            <div className="ptext justify-center py-[25px]  md:mx-[80px] sm:w-[80%] m-auto bg-white rounded-xl">
            <div className="tx flex flex-wrap justify-center gap-[50px]">
            <p className="">Какая услуга Вас интересует?</p>
            <p>Вопрос 1 из 5</p>
            </div>
            <div>
              <br />
            </div>
            
            <div className="slct sm:block sm:py-[50px] flex  md:flex md:flex-wrap md:justify-center py-[50px] m-auto w-[50%] px-[10px] lg:w-[90%] gap-[20px] bg-blue-900 rounded-xl">
                    <div className="">
                      <div className="text1 flex flex-wrap mb-[20px]  py-[20px] px-[10px] bg-white rounded-xl">
                      <p className="px-[5px]">Декоративная штукатурка</p>
                     <input type="radio"  className="sm:ml-[45%] sm:mt-[10px] md:ml-[0] md:mt-[0]"/>
                      </div>

                      <div className="text1 flex flex-wrap mb-[20px]  py-[20px] px-[10px] bg-white rounded-xl">
                      <p className="px-[5px]">Декоративная штукатурка</p>
                     <input type="radio" className="sm:ml-[45%] sm:mt-[10px] md:ml-[0] md:mt-[0]" />
                      </div>

                      <div className="text1 flex flex-wrap  mb-[20px]  py-[20px] px-[10px] bg-white rounded-xl">
                      <p className="px-[5px]">Декоративная штукатурка</p>
                     <input type="radio" className="sm:ml-[45%] sm:mt-[10px] md:ml-[0] md:mt-[0]" />
                      </div>
                    </div>
                    <div className="right">
                 <img src={user} alt="" />
                 <div className="btn2 flex flex-wrap gap-[25px] justify-center">
                      <button className="md:py-[15px] sm:w-[40%]  md:px-[90px] my-[10px] mt-[20px] text-white bg-gray-400 ">Назад</button>
                      <button className="md:py-[15px] sm:w-[40%] md:px-[90px] my-[10px] mt-[20px]   text-white bg-gradient-to-r from-gray-700 to-blue-200">Далее</button>
                    </div>
                    </div>
                    
                   </div>

            </div>
                   
                   
                   
            </div>
          </div>
        </div>
      </div>
      <div className="section9">
      <img src={img} alt="" />
        <div className="conteiner">
          <div className="block9">

          </div>
        </div>
      </div>


      <div className="section10">
        <div className="conteiner">
          <div className="block10 py-[20px]">
            <p className="sm:text-center md:text-left md:py-[20px]">Каталог фактур</p>
            <div className="component2 flex flex-wrap justify-center gap-[10px] py-[10px]">
              <Block2 img={imgComponent} text1="GROTTO"/>
              <Block2 img={imgComponent} text1="GROTTO"/>
              <Block2 img={imgComponent} text1="GROTTO"/>
              <Block2 img={imgComponent} text1="GROTTO"/>
            </div>
            <div className="component2 flex flex-wrap justify-center gap-[10px] py-[20px]">
              <Block2 img={imgComponent} text1="GROTTO"/>
              <Block2 img={imgComponent} text1="GROTTO"/>
              <Block2 img={imgComponent} text1="GROTTO"/>
              <Block2 img={imgComponent} text1="GROTTO"/>
            </div>
            <div className="btn3 text-center">
            <button className="py-[15px] px-[20px] my-[50px] text-white bg-gray-700">
            Показать больше
            </button>
            </div>
          </div>
        </div>
      </div>


      <div className="section11">
        <div className="text2">
          <p className="md: ml-[50px] mt-[50px] ">Видеоотзывы </p>
          <div className="Gem flex flex-wrap justify-center">
            <GemaroyBlock img={imgVideo} text1="Влажность и мебель" text2="Мармушка обычно используется для вылова  в северных морях "/>
            <GemaroyBlock img={imgVideo} text1="Влажность и мебель" text2="Мармушка обычно используется для вылова  в северных морях "/>
            <GemaroyBlock img={imgVideo} text1="Влажность и мебель" text2="Мармушка обычно используется для вылова  в северных морях "/>
            <GemaroyBlock img={imgVideo} text1="Влажность и мебель" text2="Мармушка обычно используется для вылова  в северных морях "/>
          </div>
        </div>
      </div>

      <div className="section12">
      <img src={img} alt="" />
        <div className="conteiner">
          <div className="block12 flex flex-wrap justify-center items-center py-[100px] gap-[50px]">

            <div className="left">
              <h1>
                Давайте обсудим ваш проект
              </h1>
             <div className="inp   ">
              <input type="text" name="" id="" placeholder="Имя " className="block border-b-2 border-black outline-none py-[15px] w-[100%]" />
              <input type="text" name="" id="" placeholder="Номер Телефон"className="block border-b-2 border-black outline-none py-[15px] w-[100%]"/>
              <input type="text" name="" id="" placeholder="Коменариии" className="block border-b-2 border-black outline-none py-[15px] w-[100%]"/>
             </div>
            <div className="btn text-center">
            <button className=" py-[15px] px-[50px] my-[50px] text-white bg-gradient-to-r from-blue-800 to-blue-300  rounded-lg">Заказать проект</button>
            </div>
            </div>
            <div className="right">
              <img src={lastimg} alt="" />
            </div>

          </div>
        </div>
      </div>



      <footer className="blockCha sm:text-center md:flex flex-wrap py-[25px]  items-center justify-center text-white gap-[100px]">
      <div className="">
        <div className="ptext">
        <h1 className="py-[5px]">
          Контакты
        </h1>

        <p className="py-[5px]">
        Мы в соц. сетях
        </p>
        </div>
        <div className="icons sm:flex sm:flex-wrap sm:ml-[35%] md:flex flex-wrap gap-2">
          <img src={facebook} alt="" />
          <img src={telegram} alt="" />
          <img src={instagram} alt="" />
          <img src={viber} alt="" />
        </div>
      </div>

      <div className="blockCha">
        <p className="py-[5px] text-xs">General contacts</p>

        <p className="py-[5px] text-xs">
        example@gmail.com
        </p>

        <p className="py-[5px] text-xs">+7 495 178 57 17</p>
      </div>

      <div className="img">
        <img src={map} alt="" />
      </div>

      </footer>

    </div>
  );
}

export default App;
