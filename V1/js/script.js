/*
The MIT License (MIT)

Copyright © 2023 Serhiy Shevchuk poetsofweb@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
"use strict";
function AnimeProc(param1, param2){
    if (param1<param2){
       setTimeout(()=>{
          param1++;
          grafik_text.innerHTML=param1+'%';
          document.documentElement.style.setProperty('--zsuv',param1+'%');
          let povorot=param1<10?'0.0'+param1+'turn':'0.'+param1+'turn';
          document.documentElement.style.setProperty('--povorot',povorot);
          AnimeProc(param1,param2);
       },50);
    }
 }

window.onload=function(){
    //    id_main.style.top = id_header.offsetTop + id_header.offsetHeight + 'px';
    document.querySelectorAll('.class_menu').forEach(element => {
        element.addEventListener( 'click', function(){
            document.querySelectorAll('.class_menu').forEach(element => {element.style.color = 'black';element.style.fontWeight = 'normal';});                    
            element.style.color = 'navy';
            element.style.fontWeight = 'bolder';
        }, false);
    });
    
    AnimeProc(0,parseInt(grafik_text.dataset.procent));

    //fon.style.visibility = "hidden";

    //block_content2.style.visibility = 'hidden';
    //block_content3.style.visibility = 'hidden';
    //block_content4.style.visibility = 'hidden';
    //block_content5.style.visibility = 'hidden';
    //block_content6.style.visibility = 'hidden';
    //id_footer.style.visibility = 'hidden';

    lupa1.onclick = function(){
        lupa1.style.visibility = "hidden";
        lupa2.style.visibility = "visible";
        poshuk.style.visibility = "visible";
        poshuk.focus();
    }

    lupa2.onclick = function(){
        lupa2.style.visibility = "hidden";
        lupa1.style.visibility = "visible";

        poshuk.value = '';
        poshuk.style.visibility = "hidden";
    }


}

