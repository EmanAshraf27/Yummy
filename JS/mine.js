// loading-screen
$(document).ready(function () {
  $(".loading-screen").fadeOut(1000, () => {
    // $("body").css("overflow", "visible")
})
});


// new WOW().init();

// let widthUl = $('.links').innerWidth();
// console.log(widthUl);
// let iconnClose=document.getElementById('iconnClose')
// let iconHome =document.querySelector('iconHome')
// console.log(iconnClose)

$(".iconn").click(function (){
  // new WOW().init();

    let leftVal= $(".navbar").css("left");
    console.log(leftVal)
    // let offVal = $(".close-open").offsetLeft;

    if(leftVal == "0px"){

    $(".navbar").animate({left:`-35%`} , 500);
    }
    else{
        $(".navbar").animate({left:0} , 500);
    }


        

                
        // $(".navbar .Search").animate__fadeInUp({
           
        // }, 1100), $(".navbar .Categories").animate__fadeInUp({
           
        // }, 1200), $(".navbar .Area").animate__fadeInUp({
           
        // }, 1300), $(".navbar .Ingredients").animate__fadeInUp({
           
        // }, 1400), $(".navbar .contact").animate__fadeInUp({
           
        // }, 1500)




})





let imgApi=document.querySelectorAll('.imgApi')  ;
// console.log(imgApi);



let finalApi,
    currentMeal="",
    finalApiSearch,
    finalApileter,
    finaCategory,
    finalArea,
    finalSearch,
    finalIngredent,
    finalMArea,
    finalMIngredent;

// =====================displayHome==========================
async function getMeala (){
    let myApi= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let myReponse=await myApi.json();
     finalApi=await myReponse.meals;
    // console.log(finalApi);

    var cartona=``;
    for(let i=0; i<finalApi.length; i++){
  cartona+=`
    <div class="col-md-3  my-3 myM  shadow"  onclick="getDetails(${i})" >
    <div class='item position-relative '>
    <img src="${finalApi[i].strMealThumb}"  class='imgApi w-100 rounded'/>
    <div class="overlay">
     <h4 class="text-black fs-2 pt-5 mt-5 ps-3"> ${finalApi[i].strMeal}</h4>
    </div>

      </div>
      </div>`

    }

        $('#rowImage').html(cartona);
}
getMeala();

async function getDetails(einfo) {

    // console.log('hii');
    let myApi= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let myReponse=await myApi.json();
     finalApi= myReponse.meals;
    //  console.log(finalApi);

    
    
    $("#rowImage").html(` <div class="home shadow my-3">
    <div class="row text-white">

      <div class="col-md-4">
        <img src=${finalApi[einfo].strMealThumb} class="img-fluid rounded">
        <h2 class="text-center">${finalApi[einfo].strMeal}</h2>
      </div>

      <div class="col-md-8">
        <h2>Instructions :</h2>
        <p>${finalApi[einfo].strInstructions}</p>
        <p><b class="fw-bolder">Area : ${finalApi[einfo].strArea}</b> Turkish</p>
        <p><b class="fw-bolder">Category : ${finalApi[einfo].strCategory}</b> Side</p>
        <h3>Recipes : </h3>
        <ul class="list-unstyled d-flex flax-wrap">
          <li class="my-3 mx-1 p-1 alert-success rounded flex-nowrap">
            ${finalApi[einfo].strMeasure1} ${finalApi[einfo].strIngredient1}
          </li>
          
            <li class="my-3 mx-1 p-1 alert-success rounded flex-nowrap">
            ${finalApi[einfo].strMeasure2} ${finalApi[einfo].strIngredient2}
          </li>
           
            <li class="my-3 mx-1 p-1 alert-success rounded">
            ${finalApi[einfo].strMeasure2} ${finalApi[einfo].strIngredient3}
          </li>
           
            <li class="my-3 mx-1 p-1 alert-success rounded">
            ${finalApi[einfo].strMeasure4} ${finalApi[einfo].strIngredient4}
          </li>
           
            <li class="my-3 mx-1 p-1 alert-success rounded">
            ${finalApi[einfo].strMeasure6} ${finalApi[einfo].strIngredient5}
          </li>
           
            <li class="my-3 mx-1 p-1 alert-success rounded">
            ${finalApi[einfo].strMeasure6} ${finalApi[einfo].strIngredient6}
          </li>
           
            <li class="my-3 mx-1 p-1 alert-success rounded">
            ${finalApi[einfo].strMeasure7} ${finalApi[einfo].strIngredient7}
          </li>
           
            <li class="my-3 mx-1 p-1 alert-success rounded">
            ${finalApi[einfo].strMeasure9} ${finalApi[einfo].strIngredient9}
          </li>
           
            <li class="my-3 mx-1 p-1 alert-success rounded">
            ${finalApi[einfo].strMeasure9} ${finalApi[einfo].strIngredient10}
          </li>
           

            <li class="my-3 mx-1 p-1 alert-success rounded">
            ${finalApi[einfo].strMeasur11} ${finalApi[einfo].strIngredien11}
          </li>

            <li class="my-3 mx-1 p-1 alert-success rounded">
            ${finalApi[einfo].strMeasure1} ${finalApi[einfo].strIngredient12}
          </li>

            <li class="my-3 mx-1 p-1 alert-success rounded">
            ${finalApi[einfo].strMeasure13} ${finalApi[einfo].strIngredient13}
          </li>
          
        </ul>
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex">
          <li class="my-3 mx-1 p-1 alert-danger rounded">
            ${finalApi[einfo].strTags}
          </li>
        </ul>

        <button class="btn btn-success me-3">
          <a href="${finalApi[einfo].strSource}" class='text-white text-decoration-none'>Source</a>
        

        <button class="btn btn-danger me-3">
          <a href="${finalApi[einfo].strYoutube}" class='text-white text-decoration-none'>Youtube</a>
        
        
      </div>

    </div>
        
  </div>`) ;


    
}   




// ====================searcBody==========================
$('.item1').click( function(){

  
  $("#rowImage").fadeOut(300);
  $(".displayMeal").fadeOut(300);
  $(".displaySearch").fadeOut(300);
  $('.contact').fadeOut(300);
  $('.displayCategory').fadeOut(300);
  $('.displaySearch').fadeIn(300);

  $('#rowSearch').html(`
  <div class="col-md-6">
  <input id="searchBar" onkeyup='getApiSearchName()' class="form-control mb-2 " placeholder="Search By Name">
  </div>
  <div class="col-md-6">
    <input class="form-control "    onkeyup='getApiLeterSearch()'    type="text" maxlength="1" id="letter" placeholder="search By First Letter...">
  </div>

`)

})


//=========================== search byName=======================
async function displaySearchMeala (){
  let myApiName= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${currentMeal}`)
  let mySearchName=await myApiName.json();
   finalApiSearch= mySearchName.meals;
  // console.log(finalApi);

  var cartona=``;
  for(let i=0; i<finalApiSearch.length; i++){
cartona+=`
  <div class="col-md-3  my-3 myM  shadow"  >
  <div class='item position-relative '>
  <img src="${finalApiSearch[i].strMealThumb}"  class='imgApi w-100 rounded'/>
  <div class="overlay">
   <h4 class="text-black fs-2 pt-5 mt-5 ps-3"> ${finalApiSearch[i].strMeal}</h4>
  </div>

    </div>
    </div>`

  }

      $('#d-search').html(cartona);
}




// function of onkeeupSearch ByName
function getApiSearchName() {
  // console.log('hiii');
  currentMeal= searchBar.value ;
  // console.log(currentMeal);
  displaySearchMeala();

}







// www.themealdb.com/api/json/v1/1/search.php?f=a;

// ============================searchByLeter===================
async function  displaySearcLeterh (){
  let myApiLeter= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${currentLetter}`)
  let myReponseLeter=await myApiLeter.json();
   finalApileter=await myReponseLeter.meals;

  var cartona=``;
  for(let i=0; i<finalApileter.length; i++){
cartona+=`
  <div class="col-md-3  my-3 myM  shadow"  >
  <div class='item position-relative '>
  <img src="${finalApileter[i].strMealThumb}"  class='imgApi w-100 rounded'/>
  <div class="overlay">
   <h4 class="text-black fs-2 pt-5 mt-5 ps-3"> ${finalApileter[i].strMeal}</h4>
  </div>

    </div>
    </div>`

  }

      $('#d-search').html(cartona);
}

// function of onkeeupSearch Byleter
function getApiLeterSearch() {
  // console.log('hiii');
  currentLetter=letter.value;
  // console.log(currentLetter)
  displaySearcLeterh();

}


//  =========================category==========================
$('.item2').click(async function(){

  $(".displayMeal").fadeOut(300);
  $(".displaySearch").fadeOut(300);
  $('.contact').fadeOut(300);
  $('.displayCategory').fadeIn(300);


  let apiCategory= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  let responseCategory=await apiCategory.json();
   finaCategory=responseCategory.categories;
//    console.log(finaCategory)

   var cartona=``;
   for(let i=0; i<finaCategory.length; i++){

 cartona+=`
   <div class="col-md-3  my-3 myM  shadow "    onclick="getmealsICateg(${i})">
   <div class='item position-relative'>

   <img src="${finaCategory[i].strCategoryThumb}"  class='imgApi w-100 rounded' />
   <div class="overlay" >
    <h4 class="text-black fs-2   ps-3"> ${finaCategory[i].strCategory}</h4>
    <p class="p-cat">${finaCategory[i].strCategoryDescription.split(" ").slice(0,22).join(" ")}</p>
   </div>

     </div>
     </div>`



   }
   $('#rowCat').html(cartona)

})

// ===============when i click about categ=============
async function getmealsICateg(cuurentCat){
   
    let apiMArea =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${finaCategory[cuurentCat].strCategory}`);
  let responseMArea=await apiMArea.json();
  finalMArea =responseMArea.meals;
//   console.log(finalMArea);
// console.log('hii')

    var cartona =``;

    for(let i=0 ; i<finalMArea.length ; i++)
    {
    cartona+=
`

<div class="col-md-3  my-3 myM  shadow"   >
    <div class='item position-relative '>
    <img src="${finalMArea[i].strMealThumb}"  class='imgApi w-100 rounded'/>
    <div class="overlay">
     <h4 class="text-black fs-2 pt-5 mt-5 ps-3"> ${finalMArea[i].strMeal}</h4>
    </div>

      </div>
      </div>

`

    }

$('#rowCat').html(cartona);


}


// ============================Area=================
$('.item3').click(async function(){

    $(".displayMeal").fadeOut(300);
    $(".displaySearch").fadeOut(300);
    $('.displayCategory').fadeOut(300);
    $('.displayIngredent').fadeOut(300);
    $('.displayArea').fadeIn(300);
    $('.contact').fadeOut(300);



  let apiArea =await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  let responseArea=await apiArea.json();
  finalArea =responseArea.meals;
  console.log(finalArea)
var cartona =``;

for(let i=0 ; i<finalArea.length ; i++)
{
cartona+=`
<div class="col-md-6 col-lg-3 my-3 myM  shadow" onclick="getmealsICounry(${i})">
      <div class="movie shadow rounded position-relative">
         <div  class="post ">
              <i class="fa-solid fa-city bg fa-3x text-danger "></i>
              <h2 class="text-white">${finalArea[i].strArea}</h2>
          </div>
       </div>
   </div>
`
}


$('.rowArea').html(cartona)

})


// ===============when i click about categ=============

async function getmealsICounry(cuurentArea){
   
    let apiMArea =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${finalArea[cuurentArea].strArea}`);
  let responseMArea=await apiMArea.json();
  finalMArea =responseMArea.meals;
//   console.log(finalMArea);
// console.log('hii')

    var cartona =``;

    for(let i=0 ; i<finalMArea.length ; i++)
    {
    cartona+=
`

<div class="col-md-3  my-3 myM  shadow"   >
    <div class='item position-relative '>
    <img src="${finalMArea[i].strMealThumb}"  class='imgApi w-100 rounded'/>
    <div class="overlay">
     <h4 class="text-black fs-2 pt-5 mt-5 ps-3"> ${finalMArea[i].strMeal}</h4>
    </div>

      </div>
      </div>

`

    }

$('.rowArea').html(cartona);


}





// =====================displayIngredints===================
$('.item4').click(async function(){

    $(".displayMeal").fadeOut(300);
    $(".displaySearch").fadeOut(300);
    $('.displayCategory').fadeOut(300);
    $('.displayArea').fadeOut(300);
    $('.contact').fadeOut(300);
    $('.displayIngredent').fadeIn(300);
    // console.log('hii');
    
    let apiIngrident =await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  let responseIngredent=await apiIngrident.json();
  finalIngredent =responseIngredent.meals;
//   console.log(finalIngredent)
var cartona =``;

for(let i=0 ; i<finalIngredent.length ; i++)
{
cartona+=`
<div class="col-md-6 col-lg-3 my-3 myM  shadow" onclick="getmealsIngredent(${i})">
     <div  class="movie shadow rounded position-relative">
         <div class="post ">
             <i class="fa-solid fa-bowl-food fa-3x text-info"></i>
             <h2 class="text-white">${finalIngredent[i].strIngredient}</h2>
             <p class="text-white">${finalIngredent[i].strDescription}</p>
         </div>
     </div>                    
 </div>


`
}

  $('.rowIngred').html(cartona)
  
  })
  

//   when i click about ingredent
async function getmealsIngredent(Ingredent) {

let apiCuIngrident =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${finalIngredent[Ingredent].strIngredient}`);
let responseIngredent=await apiCuIngrident.json();
finalMIngredent =responseIngredent.meals;
// console.log(finalIngredent)
var cartona =``;

for(let i=0 ; i<finalMIngredent.length ; i++)
{
cartona+=
`

<div class="col-md-3  my-3 myM  shadow"   >
<div class='item position-relative '>
<img src="${finalMIngredent[i].strMealThumb}"  class='imgApi w-100 rounded'/>
<div class="overlay">
 <h4 class="text-black fs-2 pt-5 mt-5 ps-3"> ${finalMIngredent[i].strMeal}</h4>
</div>

  </div>
  </div>

`

}

$('.rowIngred').html(cartona);


}


// ==============================contact===========
$('.item5').click( function(){

    $(".displayMeal").fadeOut(300);
    $(".displaySearch").fadeOut(300);
    $('.displayCategory').fadeOut(300);
    $('.displayArea').fadeOut(300);
    $('.displayIngredent').fadeOut(300);
    $('.contact').fadeIn(300);

    displayContact();

})

  function displayContact(){
    $('.rowContact').html(`<div class="row mt-3 p-2 gy-3" id="rowData">
    <section id="contact" class="container myM w-75 mx-auto mb-5 ">
  <div class="p-2">
  <h2 class="text-light mb-5">ContacUs...</h2>
  <div class="row gy-4">
    <div class="col-md-6">
      <div class="form-group">
        <input class="form-control shadow " onkeyup="getValue(${this.value})"   id="name" placeholder="Enter Your Name">
        <div class="alert mt-1 alert-danger d-none" id="namealert" role="alert">
          Special Characters and Numbers not allowed
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <input  class="form-control " id="email"  onkeyup="getregEmail(${this.value})" placeholder="Enter Email">
        <div class="alert mt-1 alert-danger d-none" id="emailalert" role="alert">
          Enter valid email. xxx@yyy.zzz!
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <input  class="form-control " onkeyup="getregPhone(${this.value})" id="phone" placeholder="Enter phone">
        <div class="alert mt-1 alert-danger  d-none" id="phonealert" role="alert">
          Enter valid Phone Number
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <input  class="form-control " id="age" onkeyup=" getregAge(${this.value}) " placeholder="Enter Age">
        <div class="alert mt-1 alert-danger  d-none" id="agealert" role="alert">
          Enter valid Age
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <input  class="form-control "    onkeyup=" getregPass(${this.value})"  type="password" id="password"  placeholder="Enter Password">
        <div class="alert mt-1 alert-danger  d-none" id="passwordalert" role="alert">
          Enter valid password *Minimum eight characters, at least one letter and one number:*
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <input  class="form-control "   onkeyup=" getregRePass(${this.value})" type="password" id="rePassword" placeholder="Enter RePassword">
        <div class="alert mt-1 alert-danger  d-none" id="repasswordalert" role="alert">
          Enter valid Repassword
        </div>
      </div>     
    </div>
  
  
  </div>
  
  <button type="submit" disabled="" id="submitBtn" class="btn btn-outline-danger mt-5">Submit</button>
  </div>
  
  </section></div>`)
  


  }


// =======================regex==============================

 function getValue(term) {

var regName=/^[A-za-z]{1,20}$/;
var userName=document.getElementById('name');
  userNameAlert = document.getElementById("namealert")

// console.log(userName.value);

// console.log(term);
if(regName.test(userName.value)==true){
  // console.log('hii');
  userName.classList.remove("is-invalid")
  userName.classList.add("is-valid")
  userNameAlert.classList.replace("d-block", "d-none")
  userNameAlert.classList.replace("d-block", "d-none")

}else{
  // console.log('soryyyyyyyyyyyyyyyy');
  userName.classList.add("is-invalid");
  userNameAlert.classList.replace("d-none", "d-block")


}
 
 }


 function getregEmail(term) {
 let userEmail = document.getElementById("email");
 let  userEmailAlert = document.getElementById("emailalert");

var regEmail=  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if(regEmail.test(userEmail.value)==true){
  // console.log('hii');
  userEmail.classList.remove("is-invalid")
  userEmail.classList.add("is-valid")
  userEmailAlert.classList.replace("d-block", "d-none")
  userEmailAlert.classList.replace("d-block", "d-none")


}else{
  // console.log('soryyyyyyyyyyyyyyyy');
  userEmail.classList.add("is-invalid");
  userEmailAlert.classList.replace("d-none", "d-block")


}

 }

 function getregPhone(term) {
  let  userPhone = document.getElementById("phone");
  let userPhoneAlert = document.getElementById("phonealert");
var regPhone=/^(002)?(01)[0125][0-9]{8}$/;

  if(regPhone.test(userPhone.value)==true)
  {
    console.log('hii');
    userPhone.classList.remove("is-invalid")
    userPhone.classList.add("is-valid")
    userPhoneAlert.classList.replace("d-block", "d-none")
    userPhoneAlert.classList.replace("d-block", "d-none")

  
  }else{
    console.log('soryyyyyyyyyyyyyyyy');
    userPhone.classList.add("is-invalid");
    
    userPhoneAlert.classList.replace("d-none", "d-block")
  
  
  }




 }


 function getregAge(term) {
  let  userAge = document.getElementById("age");
  userAgeAlert = document.getElementById("agealert");

  var regAge= /^[1-9][0-9]?$/;

  if(regAge.test(userAge.value)==true)
  {
    console.log('hii');
    userAge.classList.remove("is-invalid")
    userAge.classList.add("is-valid")
    userAgeAlert.classList.replace("d-block", "d-none")
    userAgeAlert.classList.replace("d-block", "d-none")

  
  }else{
    console.log('soryyyyyyyyyyyyyyyy');
    userAge.classList.add("is-invalid");
    
    userAgeAlert.classList.replace("d-none", "d-block")
  
  
  }

 }
 
 let
 userPassword,
 userRePassword ,
  userpasswordAlert ,
  userRepasswordAlert ;

function getregPass(term) {
  
   userPassword = document.getElementById("password"),
  userpasswordAlert = document.getElementById("passwordalert");

  var regPassword= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if(regPassword.test(userPassword.value)==true)
  {
    console.log('hii');
    userPassword.classList.remove("is-invalid")
    userPassword.classList.add("is-valid")
    userpasswordAlert.classList.replace("d-block", "d-none")
    userpasswordAlert.classList.replace("d-block", "d-none")

  
  }else{
    console.log('soryyyyyyyyyyyyyyyy');
    userPassword.classList.add("is-invalid");
    userpasswordAlert.classList.replace("d-none", "d-block");
  
  
  }




 }

 function getregRePass(term) {

  userRePassword = document.getElementById("rePassword");
let  userpasswordAlert = document.getElementById("repasswordalert");

 

 if(userRePassword.value==userPassword.value)
 {
   console.log('hii');
   userRePassword.classList.remove("is-invalid")
   userRePassword.classList.add("is-valid")
   userpasswordAlert.classList.replace("d-block", "d-none")
   userpasswordAlert.classList.replace("d-block", "d-none")

 
 }else{
   console.log('soryyyyyyyyyyyyyyyy');
   userRePassword.classList.add("is-invalid");
   userpasswordAlert.classList.replace("d-none", "d-block");
 
 
 }




}