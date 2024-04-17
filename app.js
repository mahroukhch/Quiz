var questions =[
    {
        question : '1. What is HTML?',
        option1 : 'Higher text language', 
        option2 : 'hifi text language',
        option3 : 'hyper text markup language',
        correctOption: 'hyper text markup language', 
    },
    {
    question :'2. Arry use for?',
    option1 : 'collection of data',
    option2 : 'collection of object',
    option3 :'action',
    correctOption: 'collection of data', 
     
    },
    {
        question :'3. How many types of false?',
    option1 : '3',
    option2 : '4',
    option3 :'6',
    correctOption: '6', 
     
    },
   
   {
       question :'4. What is purpose of the Math.floor() function in javaScript?',
       option1 : 'To round a number up to the nearest integer',
       option2 : 'To return the largest integer less than or equal to a given number',
       option3 :'6',
       correctOption: 'To return the largest integer less than or equal to a given number ',
       },
       {
           
       question :'5. JavaScript types are',
       option1 : 'Static',
       option2 : 'Dynamic',
       option3 :'Both ',
       correctOption: 'Both', 
       },
       {
           question :'6. The two kinds of main memory are?',
       option1 : 'CD & DVD',
       option2 : 'RAM & ROM',
       option3 :'Primary & Secondry',
       correctOption: 'RAM & ROM', 
       },
       {
           
       question :'7. Which of following is not a javaScript Data Types?',
       option1 : 'Boolran',
       option2 : 'Undefined',
       option3 :'Number',
       correctOption: 'Undefined', 
       },
       {
           question :'8. Which javaScript method is used to access an HTML element by id?',
           option1 : 'getElementById()',
           option2 : 'getElement(id)',
           option3 :'other',
           correctOption: 'getElementById()', 
           },
           {
               
       question :'9. What is unshift?',
       option1 : 'will add from start',
       option2 : 'will add last value',
       option3 :'will delete from last',
       correctOption: 'will add from start',
       },
       {
     
     
   
   
      
      question :'10. What is Java Script?',
      option1 : 'scripting language',
      option2 : 'programming language',
      option3 :'both',
      correctOption: 'both'
      },
      {
   
   
      
      question :'11. How many types of false?',
      option1 : '3',
      option2 : '4',
      option3 :'6',
      correctOption: '6',
   }
   
   
   
    ]
    var ques = document.getElementById('ques');
   var option1 = document.getElementById('opt1');
   var option2 = document.getElementById('opt2');
   var option3 = document.getElementById('opt3');
   var index = 0
   var btn = document.getElementById('btn')
   var score = 0
   function nextQ() {
       var getoptions = document.getElementsByName('options')
       for (var i = 0; i < getoptions.length ; i++) {
        
           if (getoptions[i].checked) {
               var selectvalue = getoptions[i].value;
               var selectedques = questions[index-1]['question'];
               var selectans = questions[index - 1]['option' + selectvalue];
               var correctOption = questions[index - 1]['correctOption']
               if (selectans == correctOption) {
                   score++
   
               }
           }
        
           getoptions[i].checked = false;
       }
       btn.disabled = true;
       if (index > questions.length -1) {
           alert(score)
           console.log((score/11)*100)
       }
       else {
   
           ques.innerHTML = questions[index].question;
           opt1.innerHTML = questions[index].option1;
           opt2.innerHTML = questions[index].option2;
           opt3.innerHTML = questions[index].option3;
           index++
       }
   
   }
   nextQ()
   function clicked() {
       var btn = document.getElementById('btn')
       btn.disabled = false
   }